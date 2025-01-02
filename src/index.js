

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDetails from './Components/ProductsOne/ProductDetails';
import Layout from './Components/Layout/Layout';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Profile from './Components/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css';
import Delivery from './Components/Delivery/Delivery';
import TrackOrder from './Components/Trackorder/TrackOrder';


ReactDOM.render(
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<App />} /> {/* Home page */}
                <Route path="/product-details/:id" element={<ProductDetails />} /> {/* Dynamic route */}
                <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<ProductDetails />} />
        <Route path="/delivery" element={<Delivery />} />
           {/* Route for TrackOrder Component */}
           <Route path="/track-order" element={<TrackOrder />} />
            </Routes>
        </Layout>
    </Router>,
    document.getElementById('root')
);


