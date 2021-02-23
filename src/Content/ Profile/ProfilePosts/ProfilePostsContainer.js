import React from "react";
import {addPostActionCreator} from "../../../Redux/profileReduxer";
import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (profileFormMessageText) => {
            dispatch(addPostActionCreator(profileFormMessageText))
        },

    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;