import { configureStore, createSlice } from "@reduxjs/toolkit";

const getIndex = (quotes, id) => {
  return quotes.map((quote) => quote.id).indexOf(id);
};

const initialState = {
  quotes: [
    {
      id: 1,
      author: "Tony Stark",
      text: "I'm Ironman",
      comments: [{ id: 1, text: "love you 3000" }],
    },
  ],
};

const quoteSlice = createSlice({
  name: "quote-slice",
  initialState,
  reducers: {
    addQuote(state, action) {
      const quote = action.payload;

      state.quotes.push({
        id: state.quotes.length + 1,
        author: quote.author,
        text: quote.text,
        comments: [],
      });
    },
    addComment(state, action) {
      const index = getIndex(state.quotes, action.payload.quoteId);

      if (index >= 0) {
        const newId = state.quotes[index].comments.length + 1;
        state.quotes[index].comments.push({
          id: newId,
          text: action.payload.comment,
        });
      }
    },
  },
});

export const quoteActions = quoteSlice.actions;
export const quoteReducers = quoteSlice.reducer;

const store = configureStore({ reducer: { qr: quoteReducers } });

export default store;
