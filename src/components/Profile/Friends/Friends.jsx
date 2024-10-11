import Friend from './Friend/Friend';
import m from './Friends.module.css';

function Friends(props) {
    let friendsElements = props.friends
        .map(f => (<Friend name={f.name} image={f.image} />));

    return (
        <div className={m.friends}>
            {friendsElements}
        </div>
    );
}

export default Friends;