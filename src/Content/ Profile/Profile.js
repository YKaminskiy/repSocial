import styles from './Profile.module.css';
import React from "react";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {

    return (

        <div className={styles.profile}>


        <ProfileInfo profile = {props.profile} status = {props.status} updateUserProfileStatus = {props.updateUserProfileStatus} />

            <ProfilePostsContainer store={props.store}/>



        </div>


    )}

export default Profile;