import styles from './Header.module.css';
import {NavLink} from "react-router-dom";




const Header = (props) => {

    return (

        <header className={styles.header}>

        <h1>Social</h1>

        <div className={styles.login}>

            { props.isAuth ?
                <div> {props.login}  <button onClick={props.logout}> Logout </button></div>:
            <NavLink to={'/login'}> login</NavLink>} </div>


        </header>
    )


}

export default Header;