import ProfileHeader from './ProfileHeader/ProfileHeader';
import Friends from './Friends/Friends';
import m from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';

function Profile(props) {
    return (
        <div className={m.content}>
            <ProfileHeader />
            <PostsContainer store={props.store} />
            <Friends friends={props.store.getState().profilePage.friends} />
        </div>
    );
}

export default Profile;