import React from "react";
import {addMessageActionCreator} from "../../Redux/dialogsReduxer";
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
        addMessage: (dialogsFormMessageText)=> {
            dispatch(addMessageActionCreator(dialogsFormMessageText))
        },
    }
};



export default compose (connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect

    )
(Dialogs)