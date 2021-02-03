import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/state";



const ProfilePosts = (props) => {

    let ProfileMessages = props.ProfileMessagesDB.map(item =>
        <Post message={item.message} likes={item.likes}/>
    );


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let changeText = (event) => {
        let messageText = event.target.value;
        props.dispatch(updatePostActionCreator(messageText))

    }
    return (

        <div>My posts

            <div>

                <div><textarea placeholder={"Message"} onChange={changeText}
                               value={props.newPostText}/></div>
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