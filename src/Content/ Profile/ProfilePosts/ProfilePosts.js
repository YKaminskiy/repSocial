import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";
import React from "react";




const ProfilePosts = (props) => {


    let ProfileMessages = props.ProfileMessagesDB.map(item =>
            <Post message = {item.message} likes = {item.likes} />
        );

    let text = React.createRef();

let addPost = () => {
    let messageText = text.current.value;
    props.addPost(messageText)
}



      return (

        <div>My posts

            <div><textarea ref={text} ></textarea>
                <button onClick={ addPost }>Add</button>
            </div>

            <div className={styles.posts}>

                {ProfileMessages}









            </div>

        </div>

    )
}

export default ProfilePosts;