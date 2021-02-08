import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";
import React from "react";

const ProfilePosts = (props) => {

    let ProfileMessages = props.profile.ProfileMessagesDB.map(item =>
        <Post message={item.message} likes={item.likes}/>
    );

    let addPost = () => {
        props.addPost()
    }

    let changeText = (event) => {
        let messageText = event.target.value;
        props.changeText(messageText)
    }
    return (

        <div>My posts

            <div>

                <div><textarea placeholder={"Message"} onChange={changeText}
                            value={props.profile.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>

            <div className={styles.posts}>

                {ProfileMessages}

            </div>

        </div>

    )
}

export default ProfilePosts;