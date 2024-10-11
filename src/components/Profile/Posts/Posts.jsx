import Post from './Post/Post';
import m from './Posts.module.css';

function Posts(props) {

    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likesCount} />));

    return (
        <div className={m.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;