import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogsReduxer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: ()=> {
            dispatch(addMessageActionCreator())
        },
        newMessage: (messageText)=> {
            dispatch(updateMessageActionCreator(messageText));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;