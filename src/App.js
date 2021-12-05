import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import OrderReview from "./Components/OrderReview/OrderReview";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Successfull from "./Components/Successfull/Successfull";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute path="/manageinventory">
              <ManageInventory></ManageInventory>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/successfull">
              <Successfull></Successfull>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
