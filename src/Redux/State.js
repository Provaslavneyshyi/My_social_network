import {rerenderEntireTree} from "../render";

let State = {
    profilePage:{
        PostData: [
            {id: 1, likesCount: 5, message: 'Hello World!'},
            {id: 2, likesCount: 8, message: 'Programming it\'s all world'},
            {id: 3, likesCount: 1, message: 'World! World! World!'}
        ]
    },
    MessagesPage:{
        UsersData: [
            {id: 'Serega', name: 'Serega Sergeevich'},
            {id: 'Vasena', name: 'Vasena Nyashka'},
            {id: 'Juzo', name: 'Juzo Hamster'},
            {id: 'Fat', name: 'Fat Afanasiy'},
            {id: 'Adi', name: 'Adi Lbek'}
        ],
        UserMessage: [
            {message: 'Hello!'},
            {message: 'How are you?'},
            {message: 'Let"s start!'},
            {message: 'To begin develop'},
            {message: 'We are make a message!!!'}
        ],
        SecondUserMessage: [
            {message: 'Hi!'},
            {message: 'Nice and you'},
            {message: 'Go Go go'},
            {message: 'Yes, it\'s will be fine '},
            {message: 'We are make a message too!!!'}
        ]
    }
}

export let AddPost = (newPostMessage) =>{
    let newPost = { id: 4, message: newPostMessage, likesCount: 0 }
    State.profilePage.PostData.push(newPost)
    rerenderEntireTree(State);
}

export default State;