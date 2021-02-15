import React from 'react';
import styles from './Users.module.css';
import DefaultUserLogo from "../img/user.png";
import Preloader from "../../common/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                        <button onClick={() => {

                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {withCredentials: true,
                                                headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}})
                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(item.id)
                                                    }
                                                })

                                            }}>Unfollow

                                        </button> :

                                    <button onClick={() => {

                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {},{withCredentials: true,
                                                    headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}})
                                                    .then(response => {
                                                        if (response.data.resultCode == 0) {
                                                            props.follow(item.id)
                                                        }
                                                    })

                                        }}>Follow


                                    </button>}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }



export default Users;