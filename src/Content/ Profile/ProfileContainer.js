import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReduxer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
               let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = 14800;
        }
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile = {this.props.profile} />)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose (
    connect(mapStateToProps,
        {getUserProfile}),
    withRouter,
    withAuthRedirect)
     (ProfileContainer)