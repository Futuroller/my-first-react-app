import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import m from './Dialogs.module.css';
import { addMessageCreator, onMessageChangeCreator } from '../../redux/dialogs-reducer';

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => (<DialogItem name={d.name} id={d.id} />));

    let messagesElements = props.dialogsPage.messages
        .map(m => (<Message message={m.message} />));

    function addMessage() {
        let action = addMessageCreator();
        props.dispatch(action);
    }

    function onMessageChange(e) {
        let text = e.target.value;
        let action = onMessageChangeCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={m.messages}>
                {messagesElements}
            </div>
            <div className={m.typeMessageBlock}>
                <div><textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea></div>
                <div><button onClick={addMessage} >Отправить</button></div>
            </div>
        </div>
    );
}

export default Dialogs;