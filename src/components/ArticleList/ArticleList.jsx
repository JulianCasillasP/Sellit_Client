import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";

function ArticleList() {
  const API_URL = "http://localhost:5005";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Obtener la lista de artículos al cargar el componente
    axios.get(`${API_URL}/articles`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de artículos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            {/* Crea un enlace a la página de detalles del artículo */}
            <Link to={`/articles/${article._id}`}>{article.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;