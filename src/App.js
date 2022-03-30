import { Route, Switch, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import Quote from "./pages/Quote";
import AddQuote from "./pages/AddQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path={"/quotes/:quoteId"}>
            <Quote />
          </Route>
          <Route path={"/"} exact>
            <Redirect to={"/quotes"} />
          </Route>
          <Route path={"/quotes"}>
            <Quotes />
          </Route>
          <Route path={"/add-quote"} exact>
            <AddQuote />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
