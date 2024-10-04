import Posts from './/Posts/Posts';
import Profile from './Profile/Profile';
import Friends from './Friends/Friends';
import m from './Content.module.css';

function Content() {
    return (
        <div className={m.content}>
            <Profile />
            <Posts />
            <Friends />
        </div>
    );
}

export default Content;