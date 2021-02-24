import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserProfileStatus,
    updateUserProfileStatus,
    } from "../../Redux/profileReduxer";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
               let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = this.props.authUserid;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserProfileStatus(userId)

    }
    render() {

        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateUserProfileStatus = {this.props.updateUserProfileStatus} />)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authUserid: state.auth.id
    }
}

export default compose (
    connect(mapStateToProps,
        {getUserProfile, getUserProfileStatus, updateUserProfileStatus}),
    withRouter)
     (ProfileContainer)