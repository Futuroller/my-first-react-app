import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import m from './Dialogs.module.css';

function Dialogs(props) {

    let dialogsElements = props.dialogs
        .map(d => (<DialogItem name={d.name} id={d.id} />));

    let messagesElements = props.messages
        .map(m => (<Message message={m.message} />));

    function addMessage() {
        props.addMessage();
    }

    function onMessageChange(e) {
        let text = e.target.value;
        props.onMessageChange(text);
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
                <div><textarea onChange={onMessageChange} value={props.newMessageText}></textarea></div>
                <div><button onClick={addMessage} >Отправить</button></div>
            </div>
        </div>
    );
}

export default Dialogs;