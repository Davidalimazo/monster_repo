import React from "react";
import Layout from "./component/Layout";
import { Routes, Route  } from 'react-router-dom';
import MonsterDetails  from "./component/MonsterDetails";



function App() {
 
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path=':id' element={<MonsterDetails/>} />
    </Routes>
    </>
  );
}

export default App;
