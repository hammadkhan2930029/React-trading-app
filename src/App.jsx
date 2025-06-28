import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './pages/routes/route';
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    <Router>
       <AnimatedCursor
        innerSize={10}
        outerSize={75}
        color="0, 0, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <Routes>
        {routes.map((route,index)=>(

        <Route key={index} path={route.path} element={route.element} /> 
        ))}
       
      </Routes>
    </Router>
  );
}

export default App;
