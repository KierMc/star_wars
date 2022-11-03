import './App.css';
import {Routes, Route} from 'react-router-dom';
import StarWarsForm from './components/StarWarsForm';
import Results from './components/Results';
import Error from './components/Error';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <StarWarsForm />
                <br />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/results/:apiName/:id' element={<Results />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
