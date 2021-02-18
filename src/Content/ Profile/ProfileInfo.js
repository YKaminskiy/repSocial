import styles from "./Profile.module.css";
import React from "react";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";




let ProfileInfo = (props) => {
if (!props.profile) {
    return  <Preloader/>
}
    return (



    <div className={styles.img}><img src="https://i.ytimg.com/vi/cNiWM8SBh78/maxresdefault.jpg" width={600}/>
       <div> <img src={props.profile.photos.large} /> </div>
       <div>{props.profile.fullName}</div>
        <ProfileStatus status = {"Props message"} />




    </div>



    )
}


export default ProfileInfo;