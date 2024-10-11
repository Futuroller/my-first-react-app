import m from './Friend.module.css';

function Friend(props) {
    return (
        <div className={m.friend}>
            <img src={props.image}></img>
            <a>{props.name}</a>
        </div>
    );
}

export default Friend;