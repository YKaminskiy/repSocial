import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReduxer";
import withRouter from "react-router-dom/es/withRouter";




class ProfileContainer extends React.Component {

    componentDidMount() {
               let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = 14800;
        }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, { headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}})
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }


    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile} />)

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataProfileContainer =  withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile}

    ) (WithUrlDataProfileContainer);