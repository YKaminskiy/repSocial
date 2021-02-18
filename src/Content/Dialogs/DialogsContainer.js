import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogsReduxer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

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



export default compose (connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect

    )
(Dialogs)