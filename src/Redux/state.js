let rerenderall = () => {
}


let state = {

    dialogs: {

        usersDB: [

            {id: 1, name: 'Hope'},
            {id: 2, name: 'Mike'},
            {id: 3, name: 'Eve'},
            {id: 4, name: 'Jane'},

        ],

        messagesDB: [

            {message: 'It is a long established fact that a reader will be distracted'},
            {message: 'Lorem Ipsum is that it has a more-or-less normal distribution'},
            {message: 'Pellentesque ac ex et dui hendrerit cursus'},
            {message: 'Donec sodales pulvinar imperdiet'},
        ],
        newMessageText: "",
    },



    profile: {
        ProfileMessagesDB: [
            {id: 1, message: "The generated Lorem Ipsum is therefore always free from repetition", likes: 53},
            {id: 2, message: "Contrary to popular belief, Lorem Ipsum is not simply random text", likes: 54},
            {
                id: 3,
                message: "It has survived not only five centuries, but also the leap into electronic typesetting",
                likes: 43
            },
        ],
        newPostText: '',
    }
}

export let addPost = () => {
    let newPost = {
        id: 4,
        likes: 0,
        message: state.profile.newPostText,
    };
    state.profile.ProfileMessagesDB.push(newPost)
    state.profile.newPostText = "";
    rerenderall();
};

export let updatePost = (text) => {
    state.profile.newPostText = text;
    rerenderall();
};

export let addMessage = () => {
    let newDailog = {

        message: state.dialogs.newMessageText,
    }
    state.dialogs.messagesDB.push(newDailog)
    state.dialogs.newMessageText = '';
    rerenderall();
    }

export let changeMessage = (text) => {
    state.dialogs.newMessageText = text;
    rerenderall();
}


export const subscribe = (observer) => {
    rerenderall = observer;
}

export default state;