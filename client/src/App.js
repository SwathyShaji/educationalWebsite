// import { useState } from 'react';
// import { FileUploader } from './components/FileUploader';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Preview } from './components/Preview';
// import { LoginPage} from './components/Pages/LoginPage';
// import {SignupPage} from './components/Pages/SignupPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   const [files, setFiles] = useState([]);
//   const [token, setToken] = useState('');

//   const onSuccess = (savedFiles) => {
//     setFiles(savedFiles);
//   };

//   const handleLogin = (token) => {
//     setToken(token);
//   };

//   const handleLogout = () => {
//     setToken('');
//   };

//   return (
//     <div className="App">
//       {!token ? (
//         <>
//           <LoginPage onLogin={handleLogin} />
//           <SignupPage onSignup={handleLogin} />
//         </>
//       ) : (
//         <>
//           <button onClick={handleLogout}>Logout</button>
//           <FileUploader onSuccess={onSuccess} />
//           <Preview files={files} />
//         </>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { FileUploader } from './components/FileUploader';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Preview } from './components/Preview';
// import { LoginPage } from './components/Pages/LoginPage';
// import { SignupPage } from './components/Pages/SignupPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import {CoursesPage} from './components/Pages/CoursesPage'

// function App() {
//   const [files, setFiles] = useState([]);
//   const [token, setToken] = useState('');

//   const onSuccess = (savedFiles) => {
//     setFiles(savedFiles);
//   };

//   const handleLogin = (token) => {
//     setToken(token);
//   };

//   const handleLogout = () => {
//     setToken('');
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
//           <Route path="/users" element={<FileUploader onSuccess={onSuccess} />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/" element={!token ? (
//             <>
//               <LoginPage onLogin={handleLogin} />
//               <a href="/signup">Sign Up</a>
//             </>
//           ) : (
//             <>
//               <button onClick={handleLogout}>Logout</button>
//               <FileUploader onSuccess={onSuccess} />
//               <Preview files={files} />
//             </>
//           )} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { FileUploader } from './components/FileUploader';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Preview } from './components/Preview';
// import { LoginPage } from './components/Pages/LoginPage';
// import { SignupPage } from './components/Pages/SignupPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { CoursesPage } from './components/Pages/CoursesPage';

// function App() {
//   const [files, setFiles] = useState([]);
//   const [token, setToken] = useState('');

//   const onSuccess = (savedFiles) => {
//     setFiles(savedFiles);
//   };

//   const handleLogin = (token) => {
//     setToken(token);
//   };

//   const handleLogout = () => {
//     setToken('');
//   };

//   return (
//     <Router>
//   <div className="App">
//     <Routes>
//       <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
//       <Route path="/users" element={<FileUploader onSuccess={onSuccess} />} />
//       <Route path="/courses" element={<CoursesPage />} />
//       <Route
//         path="/"
//         element={
//           !token ? (
//             <>
//               <LoginPage onLogin={handleLogin} />
//               <Link to="/signup">Sign Up</Link>
//             </>
//           ) : (
//             <>
//               <header className="header">
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <ul className="navbar-nav ml-auto"> {/* Add ml-auto class here */}
//       <li className="nav-item">
//         <Link to="/users" className="nav-link">Register</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/courses" className="nav-link">Courses</Link>
//       </li>
//       <li className="nav-item">
//         <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
//       </li>
//     </ul>
//   </nav>
// </header>
// <FileUploader onSuccess={onSuccess} />
// <Preview files={files} />
//             </>
//           )
//         }
//       />
//     </Routes>
//     <ToastContainer />
//   </div>
// </Router>

//   );
// }

// export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FileUploader } from './components/FileUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './components/Preview';
import { LoginPage } from './components/Pages/LoginPage';
import { SignupPage } from './components/Pages/SignupPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CoursesPage } from './components/Pages/CoursesPage';
import {HomePage} from './components/Pages/HomePage'

function App() {
  const [files, setFiles] = useState([]);
  const [token, setToken] = useState('');

  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
          <Route path="/users" element={<FileUploader onSuccess={onSuccess} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route
            path="/"
            element={
              !token ? (
                <>
                  <LoginPage onLogin={handleLogin} />
                  <Link to="/signup">Sign Up</Link>
                </>
              ) : (
                <>
                  <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/users" className="nav-link">User</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item">
                          <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
                        </li>
                      </ul>
                    </nav>
                  </header>
                  <Routes>
                  <Route path="/" element={<HomePage />} /> {/* Add the HomePage route */}
                    <Route path="/users" element={<FileUploader onSuccess={onSuccess} />} />
                    <Route path="/preview" element={<Preview files={files} />} />
                  </Routes>
                </>
              )
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
