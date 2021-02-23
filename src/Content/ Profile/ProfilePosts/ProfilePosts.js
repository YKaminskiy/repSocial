import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, recuired} from "../../../utils/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const ProfilePosts = (props) => {

    let ProfileMessages = props.profilePage.ProfileMessagesDB.map(item =>
        <Post message={item.message} likes={item.likes}/>
    );

    let addProfilePost = (values) => {
        props.addPost(values.profileFormMessageText)
    }


    return (

        <div>My posts
                {ProfileMessages}
                <AddProfilePostRedux onSubmit ={addProfilePost} />
        </div>

    )
}

const maxLenght25 = maxLenghtCreator(25)

export const AddProfilePost =(props)=> {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='profileFormMessageText' placeholder='Message' validate={[recuired, maxLenght25]}/>

            <div><button>Add</button></div>

        </form>
    )
}

const AddProfilePostRedux = reduxForm({form:"profileFormMessage"})(AddProfilePost)

export default ProfilePosts;