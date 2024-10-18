import React, { useEffect, useState } from 'react';
import '../styles/Joke.css'; 

const Joke = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es'); 
            if (!response.ok) throw new Error('Error al obtener el chiste');
            const data = await response.json();
            setJoke(data.joke || `${data.setup} - ${data.delivery}`);
        } catch (error) {
            console.error('Error fetching joke:', error);
            setJoke('No se pudo obtener un chiste.');
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="joke-container">
            <h2 className="joke-title">Chiste del día</h2>
            <p className="joke-text">{joke}</p>
            <button className="fetch-joke-button" onClick={fetchJoke}>Obtener otro chiste</button>
        </div>
    );
};

export default Joke;
