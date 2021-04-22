import { useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../redux/user/userSlice";
import Button from "carbon-react/lib/components/button";

const ButtonWrap = styled.div`
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
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

const CommentAuthor = styled.div`
  font-weight: 600;
`;

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
  ${(props) =>
    props.align === "right" &&
    `${CommentMeta} {
      flex-direction: row-reverse;
    }
    ${CommentContent}::before {
      right: 0;
      left: auto;
      border-left: 0.6rem solid transparent;
      border-right: none;
    }
    `}
  &:focus-within ${ButtonWrap} {
    display: block;
  }
`;

function SingleComment({ comment, deleteComment }) {
  const userDetails = useSelector(getUserDetails);

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

  const fromSelf = userDetails?.email === comment.author;

  return (
    <CommentWrap align={fromSelf ? "right" : "left"}>
      <CommentMeta>
        <CommentAuthor>{fromSelf ? "You" : comment.author}</CommentAuthor>
        {dateFormatted && <div className="date">{dateFormatted}</div>}
      </CommentMeta>
      <CommentContent tabIndex="0">
        {comment?.content}
        {fromSelf && (
          <ButtonWrap>
            <Button
              size="small"
              buttonType="tertiary"
              onClick={deleteComment}
              type="button"
              destructive
            >
              Delete?
            </Button>
          </ButtonWrap>
        )}
      </CommentContent>
    </CommentWrap>
  );
}
export default SingleComment;
