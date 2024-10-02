import './App.css';
import Friends from './components/Friends';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Friends />
      <Post />
    </div>
  );
}

export default App;
