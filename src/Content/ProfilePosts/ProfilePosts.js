import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";


const ProfilePosts = (props) => {


    let ProfileMessagesBD = [
        {pmessage: "The generated Lorem Ipsum is therefore always free from repetition", likes: 53 },
        {pmessage: "Contrary to popular belief, Lorem Ipsum is not simply random text", likes: 54 },
        {pmessage: "It has survived not only five centuries, but also the leap into electronic typesetting", likes: 43 },

        ]

    let ProfileMessages = ProfileMessagesBD.map(item =>
            <Post message = {item.pmessage} likes = {item.likes} />
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