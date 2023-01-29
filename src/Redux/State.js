// My post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//Messages
const ADD_MESSAGES = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGES = 'UPDATE-MESSAGES-TEXT';


let Store = {
    _State: {
        profilePage:{
            PostData: [
                {id: 1, likesCount: 5, message: 'Hello World!'},
                {id: 2, likesCount: 8, message: 'Programming it\'s all world'},
                {id: 2, likesCount: 8, message: 'Programming it\'s all world'},
                {id: 3, likesCount: 1, message: 'World! World! World!'}
            ],
            newPostText: ''
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
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'},
                {message: 'We are make a message!!!'}
            ],
            SecondUserMessage: [
                {message: 'Hi!'},
                {message: 'Nice and you'},
                {message: 'Go Go go'},
                {message: 'Yes, it\'s will be fine '},
                {message: 'Yes, it\'s will be fine '},
                {message: 'Yes, it\'s will be fine '},
                {message: 'Yes, it\'s will be fine '},
                {message: 'Yes, it\'s will be fine '},
                {message: 'We are make a message too!!!'}
            ],
            newMessagesText: ''
        },
        FriendPage:{
            FriendsList: [
                {name: 'Sergey', family_name: 'Tytunin', id: 1},
                {name: 'Vasena', family_name: 'Nyashka', id: 2},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Juzo', family_name: 'Humster', id: 3},
                {name: 'Fat', family_name: 'Sam', id: 4}
            ]
        },
    },
    _callSubscriber()  {
        console.log('State changed')
    },

    getStatee(){
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        //Posts

        if(action.type === ADD_POST){
            let newPost = { id: 4, message:  this._State.profilePage.newPostText, likesCount: 0 }
            this._State.profilePage.PostData.push(newPost)
            this._callSubscriber(this._State);
        }

        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._State.profilePage.newPostText = action.newText;
            this._callSubscriber(this._State);
        }

        //Dialogs

        else if (action.type === ADD_MESSAGES){
            let newMessage = {message: this._State.MessagesPage.newMessagesText}
            this._State.MessagesPage.UserMessage.push(newMessage)
            this._callSubscriber(this._State);
        }

        else if (action.type === UPDATE_MESSAGES){
            this._State.MessagesPage.newMessagesText = action.newTextMessage;
            this._callSubscriber(this._State);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator  = () => ({type: ADD_MESSAGES})
export const updateMessageActionCreator = (text_m) => ({type: UPDATE_MESSAGES, newTextMessage: text_m})





window.Store = Store;
export default Store;