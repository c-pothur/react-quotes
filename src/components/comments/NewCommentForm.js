import { useRef } from "react";
import { useDispatch } from "react-redux";

import classes from "./NewCommentForm.module.css";
import { quoteActions } from "../../store/QuoteStore";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const dispatch = useDispatch();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const comment = commentTextRef.current.value.trim();
    if (comment.length > 0) {
      dispatch(quoteActions.addComment({ quoteId: +props.quoteId, comment }));
    }
    commentTextRef.current.value = "";
    props.endAddCommentHandler();
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
