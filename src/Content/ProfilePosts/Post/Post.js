import styles from './Post.module.css'


const Post = (props) => {
    return (



                <div className={styles.post}>
                    <img src="https://madcats.ru/wp-content/uploads/2018/08/8586A23F-E3F0-4C40-98F7-2117F097AD39.jpeg"/>

                    {props.message}
                    <div><span>{props.likes}</span></div>

                </div>


    )
}

export default Post;