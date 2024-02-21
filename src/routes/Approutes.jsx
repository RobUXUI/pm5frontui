import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../componentes/layout/Layout';
import Home from '../views/home/Home';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;

