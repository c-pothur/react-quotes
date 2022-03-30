import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const Quote = () => {
  const params = useParams();
  const quote = useSelector((state) =>
    state.qr.quotes.find((q) => {
      return q.id === +params.quoteId;
    })
  );

  return (
    <>
      {quote && (
        <>
          <HighlightedQuote text={quote.text} author={quote.author} />
          <Route path={"/quotes/:quoteId"} exact>
            <Link
              className="btn--flat"
              to={"/quotes/" + quote.id + "/comments"}
            >
              Show Comments
            </Link>
          </Route>
        </>
      )}
      {!quote && <NoQuotesFound />}
      <Route path={"/quotes/:quoteId/comments"}>
        <Comments />
      </Route>
    </>
  );
};
export default Quote;
