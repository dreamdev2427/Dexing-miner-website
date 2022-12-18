import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import FTM from './ftm';

AOS.init({ duration: 2000 });
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FTM />} />
          <Route path='/fantom' element={<FTM />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
