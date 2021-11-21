import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import OrderReview from "./Components/OrderReview/OrderReview";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Successfull from "./Components/Successfull/Successfull";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orderreview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/manageinventory">
            <ManageInventory></ManageInventory>
          </Route>
          <Route path="/successfull">
            <Successfull></Successfull>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
