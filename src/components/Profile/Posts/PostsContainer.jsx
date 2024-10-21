import Posts from './Posts';
import { addPostCreator, onPostChangeCreator } from '../../../redux/profile-reducer';

function PostsContainer(props) {

    let state = props.store.getState();

    function addPost() {
        let action = addPostCreator();
        props.store.dispatch(action);
    }

    function onPostChange(text) {
        let action = onPostChangeCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Posts postTextChanged={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    );
}

export default PostsContainer;