import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleDetail({ match }) {
  const API_URL = "http://localhost:5005";
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Obtener los detalles del artículo al cargar el componente
    axios
      .get(`${API_URL}/article/${match.params.articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del artículo:", error);
      });
  }, [match.params.articleId]);

  // Verifica si aún se están cargando los detalles del artículo
  if (!article) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Artículo</h1>
      <h2>{article.name}</h2>
      <p>Descripción: {article.description}</p>
      <p>Precio: ${article.price}</p>
      <p>Condición: {article.condition}</p>
      <p>Categoría: {article.category}</p>
      {article.imageUrl && (
        <div>
          <h3>Imagen:</h3>
          <img src={article.imageUrl} alt={article.name} />
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;