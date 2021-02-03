import './App.css';
import Profile from "./Content/ Profile/Profile";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import store from "./Redux/state";






const App = (props) => {

    return (

        <BrowserRouter>
        <div className="App">


            <Header/>

            <Route path="/profile" render= { () => <Profile profile ={props.state.profile}
                                                            dispatch = {props.dispatch}
                                                            />            }/>
            <Route path="/dialogs" render= { () => <Dialogs dialogs = {props.state.dialogs}
                                                            dispatch = {props.dispatch}


            /> } />
            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
