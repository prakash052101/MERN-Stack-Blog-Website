import './App.css';
import Post from './post';
import Header from './header';
import {Route, Routes} from 'react-router-dom';
import Layout from './layout';
import IndexPage from './Pages/IndexPage';
import Loginpage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { UserContextProvider } from './userContext';
import CreatePost from './Pages/CreatePostPage';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPostPage';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/create" element={<CreatePost/>}></Route>
          <Route path="/post/:id" element={<PostPage/>}></Route>
          <Route path="/edit/:id" element={<EditPost/>}></Route>          
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
