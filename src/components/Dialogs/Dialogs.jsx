import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import m from './Dialogs.module.css';

function Dialogs(props) {

    let dialogsElements = props.dialogsData
        .map(d => (<DialogItem name={d.name} id={d.id} />));

    let messagesElements = props.messagesData
        .map(m => (<Message message={m.message} />));

    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={m.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;