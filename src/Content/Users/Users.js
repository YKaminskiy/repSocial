import React from 'react';
import styles from './Users.module.css';
import DefaultUserLogo from "../img/user.png";
import Preloader from "../../common/Preloader";
import {NavLink} from "react-router-dom";



let Users =(props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }


        return (


            <div className={styles.userspage}>

                {props.isFetching ? <Preloader />  : null}

                <div className={styles.selector}>
                    {pages.map(item => {
                        return <span className={props.currentPage === item && styles.selected}
                                     onClick={ (e) => {props.pageOnChange(item)}}>{item}</span>
                })};
                </div>



                <div className={styles.eeeee}>

                    {
                        props.users.map(item =>
                            <div>

                                <NavLink to ={'/profile/' + item.id}>
                                <img className={styles.avatar}
                                     src={item.photos.small != null ? item.photos.small : DefaultUserLogo}
                                     width='80px'/> </NavLink>



                                <div>{item.name}</div>
                                <div> {item.status}</div>

                                <div>
                                    {item.follow ?
                                        <button disabled={props.followingInProgress.some(id=>id === item.id)} onClick={() => {
                                            props.unfollow(item.id)}}>Unfollow</button> :

                                    <button disabled={props.followingInProgress.some(id=>id === item.id)} onClick={() => {
                                        props.follow(item.id)}}>Follow </button>}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }



export default Users;