import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import GlobalContext, { initContext } from './context/articleContext';
import ArticleListPage from './pages/ArticleListPage/ArticleListPage';
import { ArticlePage } from './pages/ArticlePage/ArticlePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const load = initContext();

const App: React.FC<{}> = () => {

  return (
    <GlobalContext load={load} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleListPage />} />
          <Route path="/news" element={<ArticleListPage />} />
          <Route path="/codes" element={<ArticleListPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route element={<ArticleListPage />} />
        </Routes>
        <Footer textData={['CyNEXX 2022']} />
      </Router>
    </GlobalContext>
  );
}

export default App;
