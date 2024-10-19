// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionpage from './c/Questionpage';
import Postpage from './c/Postpage';
import Navigate from './c/Navigate';
import Homepage  from './c/Homepage';

const App = () => {
  return (
    <Router>
     
      <Navigate />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/findquestion" element={<Questionpage />} />
        <Route path="/newpost" element={<Postpage />} />
       
      </Routes>
    </Router>
  );
};

export default App;