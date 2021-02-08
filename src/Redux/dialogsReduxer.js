
let initState = {


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
    };

const dialogsReduxer = (state = initState, action) => {


    switch (action.type) {
        case "MESSAGE-ADD":
            let newDailog = state.newMessageText;
               return {
                   ...state,
                   newMessageText: '',
                   messagesDB: [...state.messagesDB, {message: newDailog}]
               }
        case  "UPDATE-MESSAGE":
            return {
                ...state,
                newMessageText: action.text
            }

        default:
            return state;
    }
}
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

export default dialogsReduxer;







