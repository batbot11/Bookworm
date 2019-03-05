import React from "react";
import {connect} from "react-redux";
import VerificationMessage from "../messages/VerificationMessage";

const DashboardPage = ({isConfirmed}) => (
    <div>
        {!isConfirmed && <VerificationMessage/>}
    </div>
)

const mapState = (state) => ({
    isConfirmed: !!state.UserReducer.user.confirmed
})

export default connect(mapState)(DashboardPage);