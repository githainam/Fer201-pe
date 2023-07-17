import './App.css';
import MenuForm from './components/MenuForm';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsList from './components/NewLists';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <MenuForm />
        <Routes>
          <Route path='/' element={<NewsList/>}/>
          <Route path='/home' element={<ContactForm/>}/>
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>

    </div>
  );
}

export default App;
