import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css'; // Importa tu archivo de CSS personalizado

function ArticleList() {
  const API_URL = 'http://localhost:5005';
  const [articles, setArticles] = useState([]);
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    // Obtener la lista de artículos al cargar el componente
    axios
      .get(`${API_URL}/article`)
      .then((response) => {
        console.log('Respuesta del servidor:', response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de artículos:', error);
      });
  }, []);

  useEffect(() => {
    // Obtener los nombres de usuario
    const userPromises = articles.map((article) =>
      fetchUserName(article.user)
        .then((userName) => {
          setUserNames((prevUserNames) => ({
            ...prevUserNames,
            [article.user]: userName,
          }));
        })
        .catch((error) => {
          console.error('Error al obtener el nombre del usuario:', error);
        })
    );
    // Esperar a que se resuelvan todas las promesas
    Promise.all(userPromises);
  }, [articles]);

  const fetchUserName = (userId) => {
    // Realiza una solicitud para obtener el nombre del usuario
    return axios
      .get(`${API_URL}/users/${userId}`)
      .then((response) => {
        return response.data.username;
      })
      .catch((error) => {
        console.error('Error al obtener el nombre del usuario:', error);
        return 'Usuario Desconocido'; // En caso de error, mostrar un valor predeterminado
      });
  };

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article._id} className="article-card">
            <h2>{article.name}</h2>
            <p>Descripción: {article.description}</p>
            <p>Precio: ${article.price}</p>
            <p>Condición: {article.condition}</p>
            <p>Creado por: {userNames[article.user] || 'Cargando...'}</p>
            <Link to={`/article/${article._id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;