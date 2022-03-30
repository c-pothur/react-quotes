import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { quoteActions } from "../store/QuoteStore";

const AddQuote = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addHandler = (quote) => {
    dispatch(quoteActions.addQuote(quote));
 

    history.push("/quotes");
  };

  return (
    <>
      <QuoteForm onAddQuote={addHandler} />
    </>
  );
};
export default AddQuote;
