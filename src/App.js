import './App.css';
import Profile from "./Content/ Profile/Profile";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./Content/Dialogs/DialogsContainer";
import Users from "./Users/Users";
import UsersContainer from "./Users/UsersContainer";


const App = (props) => {

    return (

        <BrowserRouter>
        <div className="App">


            <Header/>

            <Route path="/profile" render= { () => <Profile store = {props.store}
                                                            />            }/>
            <Route path="/dialogs" render= { () => <DialogsContainer store={props.store }
            />            }/>

            <Route path="/users" render= { () => <UsersContainer store={props.store }  />  }/>


            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
