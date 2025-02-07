import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EditPage from './components/EditComponent/EditPage';
import { useSelector } from 'react-redux';
import { Footer } from './components/Footer/Footer';
import PostPage from './components/PostComponent/PostPage';

function App() {
    const [isEdit, setEdit] = useState(false);
    const [isPost, setPost] = useState(false);

    const pending = useSelector((state) => state.user.pending);
    const error = useSelector((state) => state.user.error);
    return (
        <div className="App">
            {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
            {pending && <p className="pending">Loading...</p>}
            {!isEdit && error && <p className="error">Error !!!!!!!!!!!!!!!!!!!!</p>}
            <Footer isPost={isPost} setPost={setPost} />
            {isPost && <PostPage setPost={setPost} />}
        </div>
    );
}

export default App;
