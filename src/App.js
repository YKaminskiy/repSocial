import './App.css';
import React from "react";
import Footer from "./Content/Footer/Footer";
import Sidebar from "./Content/Sidebar/Sidebar";
import  {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import UsersContainer from "./Content/Users/UsersContainer";
import ProfileContainer from "./Content/ Profile/ProfileContainer";
import HeaderContainer from "./Content/Header/HeaderContainer";
import LoginPage from "./api/LoginPage";
import {connect} from "react-redux";
import {goInitializeApp} from "./Redux/appReduxer";
import Preloader from "./common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.goInitializeApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return(

        <BrowserRouter>
        <div className="App">


           <HeaderContainer />

            <Route path="/profile/:userId?" render= { () => <ProfileContainer  />            }/>
            <Route path="/dialogs" render= { () => <DialogsContainer
            />            }/>

            <Route path="/users" render= { () => <UsersContainer  />  }/>

            <Route path="/login" render= { () => <LoginPage  />  }/>

            <Sidebar/>
            <Footer/>

        </div>
        </BrowserRouter>
)}}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {goInitializeApp}) (App)


