import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import './ArticleUser.css'; 

function ArticleUser() {
  const API_URL = 'http://localhost:5005';
  const authContext = useContext(AuthContext); // Obtén el usuario autenticado del contexto
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      // Si el usuario está autenticado, realiza la solicitud para obtener sus artículos
      axios
        .get(`${API_URL}/article/user/${authContext.user._id}`)
        .then((response) => {
          console.log('Artículos del usuario:', response.data);
          setUserArticles(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener los artículos del usuario:', error);
        });
    }
  }, [authContext.isLoggedIn, authContext.user]);

  return (
    <div>
      <h1>Mis articulos en venta:</h1>
      <ul className="article-list">
        {userArticles.map((article) => (
          <li key={article._id} className="article-card">
            <h2>{article.name}</h2>
            <p>Descripción: {article.description}</p>
            <p>Precio: ${article.price}</p>
            <p>Condición: {article.condition}</p>
            <img className="image" src={article.imageUrl[0]} alt={article.title} />
            <Link to={`/article/${article._id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleUser;