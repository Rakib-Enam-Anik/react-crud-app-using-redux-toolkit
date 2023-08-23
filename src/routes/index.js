import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";
import BooksView from "../fetaures/books/BooksView";
import AddBook from "../fetaures/books/AddBook";

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/show-books" element={<BooksView />} />
    <Route path="/add-book" element={<AddBook />} />
    <Route path="*" element={ <Error />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Index;
