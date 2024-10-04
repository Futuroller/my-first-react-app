import m from './Post.module.css';

function Post() {
    return (
        <div className={m.post}>
            <img src='https://bogatyr.club/uploads/posts/2023-02/thumbs/1677261662_bogatyr-club-p-zelenii-am-nyam-fon-vkontakte-16.jpg'></img>
            <p>Пост1</p>
        </div>
    );
}

export default Post;