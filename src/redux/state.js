function rerenderEntireTree() {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Привет, амням', likesCount: 1 },
            { id: 2, message: 'Угабуга и прочая околесица', likesCount: 4 },
            { id: 3, message: 'Здесь кто-то занимается печками?', likesCount: 15 }
        ],
        friends: [
            { id: 1, name: 'Василий', image: 'https://bogatyr.club/uploads/posts/2024-04/78376/thumbs/1713066966_bogatyr-club-ptxh-p-oboi-s-amnyamom-88.jpg'},
            { id: 2, name: 'Абраам', image: 'https://i.pinimg.com/736x/fb/37/fe/fb37fe49cb27530de1772cc344f3fa2a.jpg'},
            { id: 3, name: 'Кирилл', image: 'https://www.meme-arsenal.com/memes/274d52a723a2832eb3faaa6e69bd43d2.jpg'},
        ],
        newPostText: 'babas'
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Кирилл' },
            { id: 2, name: 'Абраам' },
            { id: 3, name: 'Артём' },
            { id: 4, name: 'Семён' },
            { id: 5, name: 'Сергей' }
        ],
        messages: [
            { id: 1, message: 'Как твоё ничего?' },
            { id: 2, message: 'Ты видел мои огромные реакты?' },
            { id: 3, message: 'Йоу' }
        ]
    } 
};

export function addPost() {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export function postTextChanged(text) {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export function subscribe(observer) {
    rerenderEntireTree = observer;
}

export default state;