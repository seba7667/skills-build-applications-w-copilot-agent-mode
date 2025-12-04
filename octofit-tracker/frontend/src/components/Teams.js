import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const codespaceName = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = `https://${codespaceName}-8000.app.github.dev/api/teams/`;
        
        console.log('Fetching Teams from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Teams API response:', data);
        
        // Handle both paginated (.results) and plain array responses
        const teamsList = Array.isArray(data) ? data : data.results || [];
        console.log('Processed teams:', teamsList);
        
        setTeams(teamsList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading teams...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <h5>Error Loading Teams</h5>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>👥 Teams</h1>
        <button className="btn btn-primary">+ Create Team</button>
      </div>

      {teams.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <h5>No Teams Found</h5>
          <p>Create a team to get started!</p>
        </div>
      ) : (
        <div className="row">
          {teams.map((team) => (
            <div key={team.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="card-title mb-0">{team.name}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{team.description || 'No description provided.'}</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr>
                        <td><strong>Members:</strong></td>
                        <td><span className="badge bg-info">{team.members_count || team.members || 0}</span></td>
                      </tr>
                      <tr>
                        <td><strong>Created:</strong></td>
                        <td>{team.created_at || team.created || 'N/A'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer bg-white border-top">
                  <button className="btn btn-sm btn-primary me-2">View</button>
                  <button className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;
