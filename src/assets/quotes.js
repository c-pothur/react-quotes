export const quotes = [];

export const getQuotes = async () => {
  const request = await fetch(
    "https://hirotest1-d0c3f.firebaseio.com/quotes.json",
    {
      method: "GET",
    }
  );
  if (!request.ok) {
    throw Error("unable to fetch Quotes");
  }
  return await request.json();
};

export const postQuote = async (quote) => {
  const request = await fetch(
    "https://hirotest1-d0c3f.firebaseio.com/quotes.json",
    {
      method: "POST",
      body: JSON.stringify(quote),
    }
  );

  if (!request.ok) {
    throw Error("unable to fetch Quotes");
  }
};
