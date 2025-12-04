import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const codespaceName = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = `https://${codespaceName}-8000.app.github.dev/api/workouts/`;
        
        console.log('Fetching Workouts from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Workouts API response:', data);
        
        // Handle both paginated (.results) and plain array responses
        const workoutsList = Array.isArray(data) ? data : data.results || [];
        console.log('Processed workouts:', workoutsList);
        
        setWorkouts(workoutsList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching workouts:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading workouts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <h5>Error Loading Workouts</h5>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>💪 Workouts</h1>
        <button className="btn btn-primary">+ Add Workout</button>
      </div>

      {workouts.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <h5>No Workouts Available</h5>
          <p>Check back later for personalized workout suggestions!</p>
        </div>
      ) : (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="card-title mb-0">{workout.name || workout.workout_type}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{workout.description || 'No description available.'}</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr>
                        <td><strong>Duration:</strong></td>
                        <td><span className="badge bg-info">{workout.duration || 'N/A'} min</span></td>
                      </tr>
                      <tr>
                        <td><strong>Difficulty:</strong></td>
                        <td>
                          <span className={`badge ${getDifficultyColor(workout.difficulty)}`}>
                            {workout.difficulty || 'N/A'}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Exercises:</strong></td>
                        <td>{workout.exercises_count || workout.exercises || 0}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer bg-white border-top">
                  <button className="btn btn-sm btn-primary me-2">Start</button>
                  <button className="btn btn-sm btn-outline-secondary">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getDifficultyColor(difficulty) {
  if (!difficulty) return 'bg-secondary';
  const level = difficulty.toLowerCase();
  if (level === 'easy' || level === 'beginner') return 'bg-success';
  if (level === 'intermediate' || level === 'medium') return 'bg-warning';
  if (level === 'hard' || level === 'advanced' || level === 'expert') return 'bg-danger';
  return 'bg-secondary';
}

export default Workouts;
