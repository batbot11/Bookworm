import React from "react";
import {Container} from "semantic-ui-react";
import {Route} from "react-router";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";

const App = ({location}) => (
  <Container>
   <Route path="/" location = {location} exact component={HomePage} />
   <Route path="/confirmation/:token" location = {location} exact component={ConfirmationPage} />
   <GuestRoute path="/login" location = {location} exact component={LoginPage} />
   <GuestRoute path="/signup" location = {location} exact component={SignupPage} />
   <GuestRoute path="/forgot_password" location = {location} exact component={ForgotPasswordPage} />
   <GuestRoute path="/reset_password/:token" location = {location} exact component={ResetPasswordPage} />
   <UserRoute path="/dashboard" exact location = {location} component={DashboardPage} />
  </Container>
)

export default App;