import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReduxer";
import axios from "axios";




class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true, headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}
        })
            .then(response => {

                if (response.data.resultCode === 0) {

                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }})
    }

    render() {
        return (
            <Header {...this.props}/>

        )
    }
}
        let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
        }


export default connect(mapStateToProps,
    {setAuthUserData})(HeaderContainer) ;