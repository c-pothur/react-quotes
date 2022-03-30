import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const quoteId = params.quoteId;
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const endAddCommentHandler = () => {
    setIsAddingComment(false);
  };
  const quote = useSelector((state) =>
    state.qr.quotes.find((q) => {
      return q.id === +quoteId;
    })
  );

  return (
    <>
      {quote && (
        <section className={classes.comments}>
          <h2>User Comments</h2>
          {quote.comments && <CommentsList comments={quote.comments} />}
          {!isAddingComment && (
            <button className="btn" onClick={startAddCommentHandler}>
              Add a Comment
            </button>
          )}
          {isAddingComment && (
            <NewCommentForm
              quoteId={quoteId}
              endAddCommentHandler={endAddCommentHandler}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Comments;
