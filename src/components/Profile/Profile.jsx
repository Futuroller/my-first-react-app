import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Friends from './Friends/Friends';
import m from './Profile.module.css';

function Profile(props) {
    return (
        <div className={m.content}>
            <ProfileHeader />
            <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
            <Friends friends={props.profilePage.friends} />
        </div>
    );
}

export default Profile;