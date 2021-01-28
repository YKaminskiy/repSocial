import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";
import React from "react";


const ProfilePosts = (props) => {


    let ProfileMessages = props.ProfileMessagesDB.map(item =>
            <Post message = {item.message} likes = {item.likes} />
        );

      return (

        <div>My posts

            <div><textarea></textarea>
                <button>Add</button>
            </div>

            <div className={styles.posts}>

                {ProfileMessages}









            </div>

        </div>

    )
}

export default ProfilePosts;