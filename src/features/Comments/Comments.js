import { useMemo, useEffect } from "react";

import Dialog from "carbon-react/lib/components/dialog";

import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreCollection,
} from "reactfire";

import CommentHistory from "./CommentHistory";
import NewComment from "./NewComment";

function Comments({ itemId, close }) {
  const firestore = useFirestore();

  const messagesRef = useMemo(
    () => firestore.collection("threads").doc(itemId).collection("messages"),
    [itemId, firestore]
  );

  const threadMessages = useFirestoreCollectionData(messagesRef, {
    idField: "key",
  });

  const comments = useMemo(() => threadMessages.data, [threadMessages]);

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
        <CommentHistory comments={comments} />
        <NewComment
          onSubmit={(message) => {
            console.log({ message });
          }}
          onCancel={close}
        />
      </Dialog>
    </>
  );
}

export default Comments;
