import styles from './ProfilePosts.module.css'
import Post from "./Post/Post";


const ProfilePosts = (props) => {

      return (

        <div>My posts


            <div><textarea></textarea>
                <button>Add</button>
            </div>

            <div className={styles.posts}>



                <Post message = 'The generated Lorem Ipsum is therefore always free from repetition'
                      likes = '54'
                />

                <Post message = 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
                      likes = '59' />

                <Post message = 'It has survived not only five centuries, but also the leap into electronic typesetting'
                      likes = '5' />





            </div>

        </div>

    )
}

export default ProfilePosts;