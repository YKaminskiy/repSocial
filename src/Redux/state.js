import {rerender} from "../index";

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

    },

    profile: {
        ProfileMessagesDB: [
            {id: 1, message: "The generated Lorem Ipsum is therefore always free from repetition", likes: 53},
            {id: 2, message: "Contrary to popular belief, Lorem Ipsum is not simply random text", likes: 54},
            {id: 3, message: "It has survived not only five centuries, but also the leap into electronic typesetting",
                likes: 43
            },

        ]
    }
}


export let addPost = (text) => {

    let newPost = {
        id: 4,
        likes: 0,
        message: text,
    };

    state.profile.ProfileMessagesDB.push(newPost)


};


export default state;