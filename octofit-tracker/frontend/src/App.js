import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  
  console.log('App initialized. Codespace Name:', codespaceName);
  console.log('API Base URL: https://' + codespaceName + '-8000.app.github.dev/api/');

  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid ps-4 pe-4">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="OctoFit Logo" />
              OctoFit Tracker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p>&copy; 2025 OctoFit Tracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="home-hero text-center">
        <h1>Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities and compete with your team!</p>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">🏃</div>
              <h5 className="card-title">Activities</h5>
              <p className="card-text">Log and track your daily fitness activities with detailed metrics and progress tracking.</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">💪</div>
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Get personalized workout suggestions tailored to your fitness level and goals.</p>
              <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">👥</div>
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Create and manage teams to collaborate and compete with your friends.</p>
              <Link to="/teams" className="btn btn-primary">View Teams</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">🏆</div>
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">Compete with others on the leaderboard and earn points for your achievements.</p>
              <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">👤</div>
              <h5 className="card-title">Users</h5>
              <p className="card-text">View user profiles and connect with other fitness enthusiasts in the community.</p>
              <Link to="/users" className="btn btn-primary">View Users</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p>&copy; 2025 OctoFit Tracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="home-hero text-center">
        <h1>Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities and compete with your team!</p>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">🏃</div>
              <h5 className="card-title">Activities</h5>
              <p className="card-text">Log and track your daily fitness activities with detailed metrics and progress tracking.</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">💪</div>
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Get personalized workout suggestions tailored to your fitness level and goals.</p>
              <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">👥</div>
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Create and manage teams to collaborate and compete with your friends.</p>
              <Link to="/teams" className="btn btn-primary">View Teams</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">🏆</div>
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">Compete with others on the leaderboard and earn points for your achievements.</p>
              <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card feature-card">
            <div className="card-body">
              <div className="feature-card-icon">👤</div>
              <h5 className="card-title">Users</h5>
              <p className="card-text">View user profiles and connect with other fitness enthusiasts in the community.</p>
              <Link to="/users" className="btn btn-primary">View Users</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
