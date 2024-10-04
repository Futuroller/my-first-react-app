import Post from './Post/Post';
import m from './Posts.module.css';

function Posts() {
    return (
        <div className={m.posts}>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;