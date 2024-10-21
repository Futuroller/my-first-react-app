import Post from './Post/Post';
import m from './Posts.module.css';

function Posts(props) {
    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likesCount} />));

    function addPost() {
        props.addPost();
    }

    function onPostChange(e) {
        let text = e.target.value;
        props.postTextChanged(text);
    }

    return (
        <div className={m.postsBlock}>
            <h3>Посты</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <button className={m.addPostBtn} onClick={addPost}>Добавить пост</button>
            </div>
            <div className={m.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;