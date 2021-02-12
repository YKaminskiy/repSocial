import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profileReduxer";
import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeText:  (messageText) => {
            dispatch(updatePostActionCreator(messageText))
        }
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;