import styles from "./Profile.module.css";
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
    }

    activateEditMode = () => {this.setState({editMode: true,      })}
    deActivateEditMode = () => {this.setState({editMode: false,      })}

        render() {
            return (
            <div className={styles.profile}>

                {!this.state.editMode &&
                <div><span onClick={this.activateEditMode}>{this.props.status} </span></div>}

                {this.state.editMode &&
                <div><input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/></div>}

            </div>
            )
        }
}

export default ProfileStatus;