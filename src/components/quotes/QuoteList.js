import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import NoQuotesFound from "./NoQuotesFound";

const QuoteList = (props) => {
  const [isAscending, setIsAscending] = useState(true);
  const history = useHistory();
  
  const sortHandler = () => {
    const sortOrder = isAscending ? "asc" : "dsc";
    setIsAscending(!isAscending);
    history.push(`/quotes?sort=${sortOrder}`);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortOrder = queryParams.get("sort");
  
  const getSortedQuotes = () => {
    if (sortOrder === "asc") {
      return [...props.quotes].sort((a, b) => {
        return a.text > b.text ? 1 : -1;
      });
    } else {
      return [...props.quotes].sort((a, b) => {
        return a.text < b.text ? 1 : -1;
      });
    }
  };

  const sortedQuotes = sortOrder ? getSortedQuotes() : props.quotes;

  return (
    <>
      {sortedQuotes.length === 0 && <NoQuotesFound />}
      {sortedQuotes && (
        <>
          <div className={classes.sorting}>
            <button onClick={sortHandler}>
              Sort {isAscending ? "Ascending" : "Descending"}
            </button>
          </div>
          <ul className={classes.list}>
            {sortedQuotes.map((quote) => (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                author={quote.author}
                text={quote.text}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default QuoteList;
