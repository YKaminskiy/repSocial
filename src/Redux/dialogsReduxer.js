
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
        ]

    };

const dialogsReduxer = (state = initState, action) => {

    switch (action.type) {
        case "MESSAGE-ADD":
            let newDailog = action.dialogsFormMessageText;
               return {
                   ...state,
                   messagesDB: [...state.messagesDB, {message: newDailog}]
               }
            default:
            return state;
    }
}
export let addMessageActionCreator = (dialogsFormMessageText) => {
    return {
        type: "MESSAGE-ADD", dialogsFormMessageText
    }
};

export default dialogsReduxer;







