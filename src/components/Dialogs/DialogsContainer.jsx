import Dialogs from './Dialogs';
import { addMessageCreator, onMessageChangeCreator } from '../../redux/dialogs-reducer';

function DialogsContainer(props) {

    let state = props.store.getState();

    function addMessage() {
        let action = addMessageCreator();
        props.store.dispatch(action);
    }

    function onMessageChange(text) {
        let action = onMessageChangeCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />
    );
}

export default DialogsContainer;