import styled from "styled-components";

import SingleComment from "./SingleComment";

const CommentHistoryBox = styled.div`
  min-height: 100px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  padding: .5rem 2rem;
`;

const NoComments = styled.div`
  margin: auto;
`;

function CommentHistory({ comments = [], deleteComment }) {
  return (
    <CommentHistoryBox>
      {comments.length === 0 && <NoComments>No comments</NoComments>}
      {comments.map((comment) => (
        <SingleComment key={comment.key} comment={comment} deleteComment={() => deleteComment(comment.key)}/>
      ))}
    </CommentHistoryBox>
  );
}

export default CommentHistory;
