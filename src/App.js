import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/*' element={<Profile store={props.store} />} />
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            </Routes> 
        </div>
      </div>
  );
}

export default App;