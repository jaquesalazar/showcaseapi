import React, { useEffect, useState } from 'react';
import '../styles/SpaceX.css'; 

const SpaceX = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLaunches = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches');
      if (!response.ok) throw new Error('Error al obtener los lanzamientos');
      const data = await response.json();
      setLaunches(data);
    } catch (error) {
      console.error('Error fetching launches:', error);
      setError('No se pudo obtener los lanzamientos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <div className="spacex-container">
      <h2>Lanzamientos de SpaceX</h2>
      {loading && <p>Cargando lanzamientos...</p>}
      {error && <p className="spacex-error">{error}</p>}
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <h3>{launch.name}</h3>
            <p>{new Date(launch.date_utc).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceX;
