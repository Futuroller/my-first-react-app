import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} postTextChanged={props.postTextChanged}/>} />
              <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />} />
            </Routes> 
        </div>
      </div>
  );
}

export default App;
