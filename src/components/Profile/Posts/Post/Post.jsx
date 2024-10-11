import m from './Post.module.css';

function Post(props) {
    return (
        <div>
            <div className={m.post}>
                <img src='https://bogatyr.club/uploads/posts/2023-02/thumbs/1677261662_bogatyr-club-p-zelenii-am-nyam-fon-vkontakte-16.jpg'></img>
                <p>{props.message}</p>
            </div>
            <span className={m.likes}>{props.likesCount} like</span>
        </div>
    );
}

export default Post;