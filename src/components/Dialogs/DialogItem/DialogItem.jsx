import { NavLink } from 'react-router-dom';
import m from './DialogItem.module.css';

function DialogItem(props) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${m.dialog} ${m.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;