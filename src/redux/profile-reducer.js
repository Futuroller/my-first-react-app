const ADD_POST = 'ADD-POST';
const POST_TEXT_CHANGED = 'POST-TEXT-CHANGED';

let initialState = {
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
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
        
            state.posts.push(newPost);
            state.newPostText = '';
        break;

        case POST_TEXT_CHANGED:
            state.newPostText = action.text;
            break;

        default: return state
    }

    return state;
}

export function addPostCreator() {
    return {
        type: ADD_POST,
    };
}

export function onPostChangeCreator(text) {
    return {
        type: POST_TEXT_CHANGED,
        text: text
    };
}

export default profileReducer;