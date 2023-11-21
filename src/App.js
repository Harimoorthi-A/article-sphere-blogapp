import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import './bootstrap.min.css'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import ReadingPage from './pages/ReadingPage';
import { useState } from 'react';
import CreatePost from './pages/CreatePost';
import Footer from './components/Footer'
function App() {

  const [isAuth, setIsAuth]=useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Auth setIsAuth={setIsAuth}></Auth>}></Route>
        <Route path='/' element={<Auth register></Auth>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/reading' element={<ReadingPage></ReadingPage>}></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}></CreatePost>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
