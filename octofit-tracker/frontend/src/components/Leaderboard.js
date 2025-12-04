import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const codespaceName = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`;
        
        console.log('Fetching Leaderboard from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Leaderboard API response:', data);
        
        // Handle both paginated (.results) and plain array responses
        const leaderboardList = Array.isArray(data) ? data : data.results || [];
        console.log('Processed leaderboard:', leaderboardList);
        
        setLeaderboard(leaderboardList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <h5>Error Loading Leaderboard</h5>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="mb-4">🏆 Leaderboard</h1>

      {leaderboard.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <h5>No Leaderboard Data Available</h5>
          <p>Check back later for leaderboard rankings!</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Points</th>
                <th>Activities</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.id || index} className={index === 0 ? 'table-warning' : ''}>
                  <td>
                    <strong>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''} {index + 1}
                    </strong>
                  </td>
                  <td>
                    <strong>{entry.username || entry.user_name || entry.name || 'N/A'}</strong>
                  </td>
                  <td>
                    <span className="badge bg-success">{entry.points || entry.total_points || 0}</span>
                  </td>
                  <td>{entry.activities_count || entry.activities || 0}</td>
                  <td>
                    <span className="badge bg-primary">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
