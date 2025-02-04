import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EditPage from './components/EditComponent/EditPage';
import { useSelector } from 'react-redux';

function App() {
    const [isEdit, setEdit] = useState(false);
    const pending = useSelector((state) => state.user.pending);
    const error = useSelector((state) => state.user.error);
    return (
        <div className="App">
            {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
            {pending && <p className="pending">Loading...</p>}
            {!isEdit && error && <p className="error">Error !!!!!!!!!!!!!!!!!!!!</p>}
        </div>
    );
}

export default App;
