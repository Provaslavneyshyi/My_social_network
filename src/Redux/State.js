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
            ]
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

    getStatee(props){
        return this._State;
    },

    AddPost() {
        debugger;
        let newPost = { id: 4, message:  this._State.profilePage.newPostText, likesCount: 0 }
        this._State.profilePage.PostData.push(newPost)
        this._callSubscriber(this._State);
    },

    updateNewPostText(newText) {
        this._State.profilePage.newPostText = newText;
        this._callSubscriber(this._State);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

window.Store = Store;
export default Store;