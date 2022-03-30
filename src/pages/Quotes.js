import QuoteList from "../components/quotes/QuoteList";
import { useSelector } from "react-redux";

function Quotes() {
  const quotes = useSelector((state) => state.qr.quotes);
  return <QuoteList quotes={quotes} />;
}
export default Quotes;
