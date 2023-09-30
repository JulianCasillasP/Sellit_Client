import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css'; // Importa tu archivo de CSS personalizado

function ArticleList() {
  const API_URL = 'http://localhost:5005';
  const [articles, setArticles] = useState([]);

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
            <p>Creado por: {article.seller.username}</p>
            
            {article.imageUrl && (
              <div>
                <h3>Imagen:</h3>
                <img src={article.imageUrl} alt={article.name} />
              </div>
            )}
            <Link to={`/article/${article._id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
