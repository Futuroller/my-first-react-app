const ADD_POST = 'ADD-POST';
const POST_TEXT_CHANGED = 'POST-TEXT-CHANGED';

function profileReducer(state, action) {
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