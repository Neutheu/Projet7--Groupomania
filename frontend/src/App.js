import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ModifyPostPage from './pages/ModifyPostPage';


function App () {

    let userId = localStorage.getItem('userId');

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={userId ? <HomePage/> : <LoginPage/>}/>
                    <Route exact path="/ModifyPostPage" element={<ModifyPostPage />}/>
                    <Route exact path="/SignUp" element={<SignUpPage />}/>
                    <Route exact path="/Login" element={<LoginPage />}/>
                    <Route exact path="/CreatePostPage" element={userId ? <CreatePostPage/> : <LoginPage/>}/>
                </Routes>
            </Router>
        </div> )
}

export default App