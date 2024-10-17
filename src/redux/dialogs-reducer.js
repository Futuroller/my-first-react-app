const SEND_MESSAGE = 'SEND-MESSAGE';
const MESSAGE_TEXT_CHANGED = 'MESSAGE-TEXT-CHANGED';

export function dialogsReducer(state, action) {

    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
        
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;

        case MESSAGE_TEXT_CHANGED:
            state.newMessageText = action.text;
            break;

        default: return state
    }

    return state;
}

export function addMessageCreator() {
    return {
        type: SEND_MESSAGE,
    };
}

export function onMessageChangeCreator(text) {
    return {
        type: MESSAGE_TEXT_CHANGED,
        text: text
    };
}

export default dialogsReducer;