

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDetails from './Components/ProductsOne/ProductDetails';
import Layout from './Components/Layout/Layout';

ReactDOM.render(
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<App />} /> {/* Home page */}
                <Route path="/product-details/:id" element={<ProductDetails />} /> {/* Dynamic route */}
            </Routes>
        </Layout>
    </Router>,
    document.getElementById('root')
);


