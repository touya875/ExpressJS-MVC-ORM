import React from 'react';
import './App.scss';
import NavHeader from './components/Navigation/NavHeader';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import AppRoutes from './routes/AppRoutes';
import { Rings } from 'react-loader-spinner';
import { UserContext } from './context/UserContext';

function App() {

  const { user } = useContext(UserContext);


  return (
    <>
    <Router>
      {user && user.isLoading ?
        <div className="loading-container">
          <Rings
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
          />
          <div>Loading data...</div>
        </div>
        :
        <>
            <div className="app-header">
              <NavHeader />
            </div>

            <div className="app-container">
              <AppRoutes />
            </div>
        </>
      }
    </Router>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;