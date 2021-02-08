import styles from './Profile.module.css';
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React from "react";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";


const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <div className={styles.img}><img src="https://i.ytimg.com/vi/cNiWM8SBh78/maxresdefault.jpg" width={600}/>
            </div>

        <ProfilePostsContainer store={props.store}


/>


        </div>

    )
}

export default Profile;