import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
              <Route path='/content/*' element={<Content />} />
              <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
