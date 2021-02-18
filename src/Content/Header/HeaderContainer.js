import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser, setAuthUserData} from "../../Redux/authReduxer";




class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser()
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
    {setAuthUserData, authUser })(HeaderContainer) ;