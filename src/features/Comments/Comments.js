import { useCallback, useMemo, useEffect } from "react";

import Dialog from "carbon-react/lib/components/dialog";
import Loader from "carbon-react/lib/components/loader";

import { useFirestore, useFirestoreCollectionData } from "reactfire";

import CommentHistory from "./CommentHistory";
import NewComment from "./NewComment";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../redux/user/userSlice";

function Comments({ itemId, close }) {
  const firestore = useFirestore();

  const itemRef = useMemo(() => firestore.collection("items").doc(itemId), [
    itemId,
    firestore,
  ]);

  const messagesRef = useMemo(() => itemRef.collection("messages"), [itemRef]);

  const userDetails = useSelector(getUserDetails);

  const threadMessages = useFirestoreCollectionData(messagesRef, {
    idField: "key",
  });

  const comments = useMemo(
    () =>
      (threadMessages?.data || []).sort((a, b) => {
        try {
          const Ta = a.datetime.seconds * 1000 + a.datetime.milliseconds;
          const Tb = b.datetime.seconds * 1000 + b.datetime.milliseconds;
          if (Ta < Tb) {
            return -1;
          }
          if (Ta > Tb) {
            return 1;
          }
        } catch (err) {}
        // a must be equal to b
        return 0;
      }),
    [threadMessages]
  );

  const addComment = useCallback(
    (comment) => {
      const now = Date.now();
      itemRef.update({
        messageCount: threadMessages.data.length + 1,
      });
      messagesRef.add({
        author: userDetails.email,
        content: comment,
        datetime: {
          seconds: Math.floor(now / 1000),
          milliseconds: now % 1000,
        },
      });
    },
    [userDetails, itemRef, messagesRef, threadMessages]
  );

  const deleteComment = useCallback(
    (id) => {
      console.log(id);
      messagesRef.doc(id).delete();
    },
    [messagesRef]
  );

  useEffect(() => {
    console.log({ itemId, comments });
  }, [comments, itemId]);

  return (
    <>
      <Dialog
        open={true}
        onCancel={() => close()}
        title="Comments"
        size="medium"
      >
        {threadMessages.status === "loading" ? (
          <div>
            <Loader size="large" />
          </div>
        ) : (
          <>
            <CommentHistory
              comments={comments}
              deleteComment={(id) => deleteComment(id)}
            />
            <NewComment
              onSubmit={(message) => {
                console.log({ message });
                addComment(message);
              }}
              onCancel={close}
            />
          </>
        )}
      </Dialog>
    </>
  );
}

export default Comments;
