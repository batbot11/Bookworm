import React from "react";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";
import {Route} from "react-router";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import NewBookPage from "./components/pages/NewBookPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import TopNavigation from "./components/navigation/TopNavigation";

const App = ({location, isAuthenticated}) => (
  <Container>
     {isAuthenticated && <TopNavigation/>} 
   <Route path="/" location = {location} exact component={HomePage} />
   <Route path="/confirmation/:token" location = {location} exact component={ConfirmationPage} />
   <GuestRoute path="/login" location = {location} exact component={LoginPage} />
   <GuestRoute path="/signup" location = {location} exact component={SignupPage} />
   <GuestRoute path="/forgot_password" location = {location} exact component={ForgotPasswordPage} />
   <GuestRoute path="/reset_password/:token" location = {location} exact component={ResetPasswordPage} />
   <UserRoute path="/dashboard" exact location = {location} component={DashboardPage} />
   <UserRoute path="/books/new" exact location = {location} component={NewBookPage} />
  </Container>
)

const mapState = state => ({
  isAuthenticated: !!state.UserReducer.user.token
})

export default connect(mapState)(App);