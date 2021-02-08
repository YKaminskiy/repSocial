import styles from './Users.module.css';



const Users = (props) => {



    return(

        <div className={styles.userspage}>

            <div className={styles.users}>

                {
                    props.users.map(item=>
                        <div>


                              <img className={styles.avatar} src={item.url} width='80px'/>
                              <div>{item.name}</div>
                            <div> {item.status}</div>
                           <div>{item.location.city}, {item.location.country}</div>
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