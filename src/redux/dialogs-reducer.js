const SEND_MESSAGE = 'SEND-MESSAGE';
const MESSAGE_TEXT_CHANGED = 'MESSAGE-TEXT-CHANGED';

let initialState = {
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
    ],
    newMessageText: 'Гойда, Амням'
}

function dialogsReducer(state = initialState, action) {

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