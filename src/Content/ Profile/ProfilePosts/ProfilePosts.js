import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";
import React from "react";


const ProfilePosts = (props) => {


    let ProfileMessages = props.ProfileMessagesDB.map(item =>
            <Post message = {item.message} likes = {item.likes} />
        );

    let text = React.createRef();

    let changeText = () => {
    let messageText = text.current.value;
    props.updatePost(messageText)

}

      return (

        <div>My posts

            <div>

                <div><textarea  onChange={changeText}
                            ref={text}
                            value={props.newPostText} /></div>
                    <div><button onClick={props.addPost}>Add</button></div>
            </div>

            <div className={styles.posts}>

                {ProfileMessages}

            </div>

        </div>

    )
}

export default ProfilePosts;