import styles from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const Sidebar = () => {
    return(

        <div className={styles.sidebar}>

            <div className={styles.link}>
                <NavLink to="/profile" activeClassName={styles.active} > Profile </NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/dialogs" activeClassName={styles.active}> Messages </NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/Users" activeClassName={styles.active}> Users</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/Settings" activeClassName={styles.active}> Settings</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to="/login" activeClassName={styles.active}> Login</NavLink>
            </div>



        </div>

    )
}


export default Sidebar;