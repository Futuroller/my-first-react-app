import React from 'react';
import Post from './Post/Post';
import m from './Posts.module.css';

function Posts(props) {
    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likesCount} />));

    let newPostElement = React.createRef();

    function addPost() {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.postTextChanged(text);
    }

    return (
        <div className={m.postsBlock}>
            <h3>Посты</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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