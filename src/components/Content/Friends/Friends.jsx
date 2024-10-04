import m from './Friends.module.css';

function Friends() {
    return (
        <div className={m.friends}>
            <div><a>Друг1</a></div>
            <div><a>Друг2</a></div>
            <div><a>Друг3</a></div>
        </div>
    );
}

export default Friends;