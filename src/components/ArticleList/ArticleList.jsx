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
        console.log("Respuesta del servidor:", response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de artículos:", error);
      });
  }, []);

  const fetchUserName = (userId) => {
    // Realiza una solicitud para obtener el nombre del usuario
    return axios.get(`${API_URL}/users/${userId}`)
      .then((response) => {
        return response.data.username;
      })
      .catch((error) => {
        console.error("Error al obtener el nombre del usuario:", error);
        return "Usuario Desconocido"; // En caso de error, mostrar un valor predeterminado
      });
  };

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h2>{article.name}</h2>
            <p>Descripción: {article.description}</p>
            <p>Precio: ${article.price}</p>
            <p>Condición: {article.condition}</p>
            <p>Creado por: {fetchUserName(article.user)}</p> {/* Mostrar el nombre del usuario */}
            {/* Crea un enlace a la página de detalles del artículo */}
            <Link to={`/articles/${article._id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;