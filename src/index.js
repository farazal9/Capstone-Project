import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Layout from './Components/Layout/Layout';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Profile from './Components/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css';
import Delivery from './Components/Delivery/Delivery';
import TrackOrder from './Components/Trackorder/TrackOrder';
import { Provider } from 'react-redux';
import store from './Store';
import EditProfile from './Components/EditProfile/EditProfile';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} /> {/* Home page */}
                    <Route path="/product-details/:id" element={<ProductDetails />} /> 
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/track-order" element={<TrackOrder />} /> {/* Route for TrackOrder Component */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit-profile" element={<EditProfile />} /> {/* Route for EditProfile component */}
                </Routes>
            </Layout>
        </Router>
    </Provider>,
    document.getElementById('root')
);
