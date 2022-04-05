import React from 'react';
import Main from "./pages/main/Index";
import Error from "./pages/error/Error";
import NotFound from "./pages/error/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';

import "./style/common.scss";

const App = () => {
    return (
        <ErrorBoundary FallbackComponent={Error}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route  path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;
