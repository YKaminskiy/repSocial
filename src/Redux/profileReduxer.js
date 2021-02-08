

let initState = {
        ProfileMessagesDB: [
            {id: 1, message: "The generated Lorem Ipsum is therefore always free from repetition", likes: 53},
            {id: 2, message: "Contrary to popular belief, Lorem Ipsum is not simply random text", likes: 54},
            {id: 3, message: "It has survived not only five centuries, but also the leap into electronic typesetting",
                likes: 43
            },
        ],
        newPostText: '',
    };


const profileReduxer = (state = initState, action) => {

    switch (action.type) {
        case "POST-ADD":
            let newPost = {
              message: state.newPostText,
                id: "7",
                likes: "0"
                            }
            return {
                ...state,
                newPostText: "",
                ProfileMessagesDB: [...state.ProfileMessagesDB, newPost]
            }
        case "UPDATE-POST":
                   return {
                       ...state,
                       newPostText: action.text
                   }
        default:
            return state;

    }


}
export let addPostActionCreator = () => {
    return {
        type: "POST-ADD"
    }

};
export let updatePostActionCreator = (messageText) => {
    return {
        type: "UPDATE-POST", text: messageText
    }

};

export default profileReduxer;








