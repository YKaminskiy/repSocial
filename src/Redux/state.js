
let store = {

    state:  {

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
            newMessageText: "werwer",
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
            newPostText: '123123',
        }
    },


    getState() {
        return this.state
    },





rerenderall () {},

    dispatch(action) {
      if (action.type === "POST-ADD") {
          this.addPost()
      }else if (action.type === "UPDATE-POST" ){
          this.updatePost(action.text)
      }

      else if (action.type === "MESSAGE-ADD") {
          this.addMessage()
      }
      else if (action.type === "UPDATE-MESSAGE") {
          this.changeMessage(action.text)
      }



    },

    addPost () {
        let newPost = {
            id: 4,
            likes: 0,
            message: this.state.profile.newPostText,
        };
        this.state.profile.ProfileMessagesDB.push(newPost)
        this.state.profile.newPostText = "";
        this.rerenderall();
    },
    updatePost (text) {
        this.state.profile.newPostText = text;
        this.rerenderall();
    },
    addMessage() {
        let newDailog = {

            message: this.state.dialogs.newMessageText,
        }
        this.state.dialogs.messagesDB.push(newDailog)
        this.state.dialogs.newMessageText = '';
        this.rerenderall();
    },
    changeMessage(text){
        this.state.dialogs.newMessageText = text;
        this.rerenderall();
    },
    subscribe(observer) {
        this.rerenderall = observer;
    },
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
export let addMessageActionCreator = () => {
    return {
        type: "MESSAGE-ADD"
    }
};
export let updateMessageActionCreator = (messageText) => {
    return {
        type: "UPDATE-MESSAGE", text:messageText
    }
};

export default store;