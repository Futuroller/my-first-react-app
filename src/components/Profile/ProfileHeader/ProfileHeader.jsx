import m from './ProfileHeader.module.css';

function ProfileHeader() {
    return (
        <div className={m.profile}>
            <img src='/images/profile_bg.jpg'></img>
        </div>
    );
}

export default ProfileHeader;