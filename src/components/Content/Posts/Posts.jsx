import Post from './Post/Post';
import m from './Posts.module.css';

function Posts() {

    let postsData = [
        { id: 1, message: 'Привет, амням', likesCount: 1 },
        { id: 2, message: 'Угабуга и прочая околесица', likesCount: 4 },
        { id: 3, message: 'Здесь кто-то занимается печками?', likesCount: 15 }
    ];

    let postsElements = postsData
        .map(p => (<Post message={p.message} likesCount={p.likesCount} />));

    return (
        <div className={m.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;