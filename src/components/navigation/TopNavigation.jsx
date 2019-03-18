import React from "react";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import {Menu, Dropdown, Image} from "semantic-ui-react";
import {Link} from "react-router-dom"; 
import gravatarUrl from "gravatar-url";

const TopNavigation = ({user, logout}) => (
    <Menu secondary pointing >
        <Menu.Item as={Link} to="/dashboard" >Dashboard</Menu.Item>
        <Menu.Menu position="right" >
        <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />} >
        <Dropdown.Menu>
        <Dropdown.Item onClick = {() => logout()} >Logout</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Menu.Menu>
    </Menu>
)

const mapState = state => ({
    user: state.UserReducer.user
})

export default connect(mapState, {logout})(TopNavigation);