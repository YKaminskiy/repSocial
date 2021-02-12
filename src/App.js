import './App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Content/ Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";


const App = (props) => {

    return (

        <BrowserRouter>
        <div className="App">


           <HeaderContainer />

            <Route path="/profile/:userId?" render= { () => <ProfileContainer  />            }/>
            <Route path="/dialogs" render= { () => <DialogsContainer
            />            }/>

            <Route path="/users" render= { () => <UsersContainer  />  }/>


            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
