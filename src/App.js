import './App.css';
import Profile from "./Content/ Profile/Profile";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";



const App = (props) => {

    return (

        <BrowserRouter>
        <div className="App">


            <Header/>

            <Route path="/profile" render= { () => <Profile ProfileMessagesDB ={props.ProfileMessagesDB}    />            }/>
            <Route path="/dialogs" render= { () => <Dialogs usersDB = {props.usersDB} messagesDB ={props.messagesDB}  /> } />
            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
