import styles from './Profile.module.css';
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React from "react";


const Profile = (props) => {
    return (
        <div className={styles.profile}>

            <div className={styles.img}><img src="https://i.ytimg.com/vi/cNiWM8SBh78/maxresdefault.jpg" width={600}/>
            </div>

        <ProfilePosts ProfileMessagesDB ={props.ProfileMessagesDB}
                      addPost = {props.addPost}
                      newPostText = {props.newPostText}
                      updatePost = {props.updatePost}

/>


        </div>

    )
}

export default Profile;