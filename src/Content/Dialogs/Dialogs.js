import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";


let DialogItem = (props) => {

    let urlid = '/dialogs/' + props.id

    return (
        <div className={styles.people}>
            <NavLink to={urlid} activeClassName={styles.active}>{props.name}</NavLink>
        </div>

    )
};

let Messages = (props) => {
    return(
        <div className={styles.message}> {props.message} </div>
    )

};




const Dialogs = (props) => {

    let MessagesBD = [

        {message: 'It is a long established fact that a reader will be distracted'},
        {message: 'Lorem Ipsum is that it has a more-or-less normal distribution'},
        {message: 'Pellentesque ac ex et dui hendrerit cursus'},
        {message: 'Donec sodales pulvinar imperdiet'},
    ]


    let usersBD = [

        {id: 1, name: 'Hope'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Eve'},
        {id: 4, name: 'Jane'},

    ]

    let DialogUser = usersBD.map(item =>
        <DialogItem id = {item.id} name={item.name} />

    );

    let DialogMessages = MessagesBD.map(item =>
        <Messages message = {item.message} />
);

    return (

        <div className={styles.dialogs}>

            <div className={styles.peoples}>

                {DialogUser}

            </div>

            <div className={styles.messages}>

                {DialogMessages}


            </div>
        </div>

)
}

export default Dialogs;
