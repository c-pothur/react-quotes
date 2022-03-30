import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";
import { postQuote } from "../../assets/quotes";

const NoQuotesFound = () => {
  const clickHandler = () => {
    postQuote({
      id: 2,
      author: "Tony Stark",
      text: "I'm Ironman",
      comments: ["love you 3000"],
    });
  };
  const getHandler = () => {};
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className="btn" to="/add-quote">
        Add a Quote
      </Link>
      <br />
      <button className="btn" onClick={clickHandler}>
        ADD
      </button>
      <br />
      <button className="btn" onClick={getHandler}>
        GET
      </button>
    </div>
  );
};

export default NoQuotesFound;
