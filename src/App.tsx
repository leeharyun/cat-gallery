import React from 'react';
import Main from "./pages/main/Index";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/common.scss";
const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;
