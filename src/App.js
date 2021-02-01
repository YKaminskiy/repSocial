import './App.css';
import Profile from "./Content/ Profile/Profile";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {changeMessage, updatePost} from "./Redux/state";





const App = (props) => {

    return (

        <BrowserRouter>
        <div className="App">


            <Header/>

            <Route path="/profile" render= { () => <Profile ProfileMessagesDB ={props.state.profile.ProfileMessagesDB}
                                                            addPost = {props.addPost}
                                                            newPostText = {props.state.profile.newPostText}
                                                            updatePost = {props.updatePost}
                                                            />            }/>
            <Route path="/dialogs" render= { () => <Dialogs dialogs = {props.state.dialogs}
                                                            addMessage = {props.addMessage}
                                                            newMessageText = {props.state.dialogs.newMessageText}
                                                            changeMessage = {props.changeMessage}
            /> } />
            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
