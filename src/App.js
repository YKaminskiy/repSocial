import './App.css';
import Profile from "./Content/ Profile/Profile";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Dialogs from "./Content/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";



const App = () => {
    return (

        <BrowserRouter>
        <div className="App">


            <Header/>

            <Route path="/profile"> <Profile/> </Route>
            <Route path="/dialogs"> <Dialogs /> </Route>
            <Sidebar/>
            <Footer/>


        </div>
        </BrowserRouter>

);
}



export default App;
