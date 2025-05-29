// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AboutMe          from './routes/AboutMe';
import Technical        from './routes/Technical';
import Proyects         from './routes/Proyects';
import Contact          from './routes/Contact';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* ---------- Públicas ---------- */}
          <Route path="/"      element={<AboutMe />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}