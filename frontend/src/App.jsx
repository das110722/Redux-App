import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EditPage from './components/EditComponent/EditPage';

function App() {
    const [isEdit, setEdit] = useState(false);
    return <div className="App">{isEdit ? <EditPage /> : <Header setEdit={setEdit} />}</div>;
}

export default App;
