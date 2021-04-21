import { useMemo } from "react";
import styled from "styled-components";

const CommentWrap = styled.div`
  margin-bottom: 1rem;
  width: 66%;
  ${(props) => props.align === "right" && "margin-left: auto;"}
  .date {
    opacity: 0;
  }
  &:hover {
    .date {
      opacity: 1;
    }
  }
`;

const CommentAuthor = styled.div`
  font-weight: 600;
`;

const CommentMeta = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
  gap: 0.5rem;
`;

const CommentContent = styled.div`
  font-size: 16px;
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 100%;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.6rem solid rgba(0, 0, 0, 0.1);
  }
`;

function SingleComment({ comment, align = "left" }) {
  const dateFormatted = useMemo(
    () =>
      comment?.datetime?.seconds
        ? new Date(comment.datetime.seconds * 1000).toLocaleString({
            weekday: "long",
            year: "numeric",
            month: "long",
          })
        : null,
    [comment.datetime]
  );

  return (
    <CommentWrap>
      <CommentMeta>
        <CommentAuthor>{comment.author}</CommentAuthor>
        {dateFormatted && <div className="date">{dateFormatted}</div>}
      </CommentMeta>
      <CommentContent>{comment?.content}</CommentContent>
    </CommentWrap>
  );
}
export default SingleComment;
