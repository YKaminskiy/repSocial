import styles from './Users.module.css';
import axios from "axios";
import DefaultUserLogo from "../img/user.png";



const Users = (props) => {

let getUsers =()=> {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }
}
    return(



    <div className={styles.userspage}>
        <button onClick={getUsers}>Get</button>
            <div className={styles.users}>

                {
                    props.users.map(item=>
                        <div>


                              <img className={styles.avatar} src={item.photos.small != null ? item.photos.small: DefaultUserLogo} width='80px'/>
                              <div>{item.name}</div>
                            <div> {item.status}</div>

                           <div> {item.follow ? <button onClick={ ()=> {props.unfollow(item.id)}}>Unfollow</button>:
                               <button onClick={ ()=> {props.follow(item.id)}}>Follow</button>     }</div>

                        </div>


                )


                }


            </div>




        </div>

    )
}

export default Users;