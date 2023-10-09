import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function ArticleDetail() {
  const API_URL = 'http://localhost:5005';
  const { articleId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/article/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del artículo:', error);
      });
  }, [articleId]);

  if (!article) {
    return <div>Cargando...</div>;
  }

  const isOwner = article.seller._id === user._id;

  const handleEdit = () => {
    if (isOwner) {
      // Navega a la página de edición si es el propietario
      navigate(`/edit-article/${articleId}`);
    }
  };

  const handleDelete = () => {
    if (isOwner) {
      axios
        .delete(`${API_URL}/article/${articleId}`)
        .then(() => {
          // Navega a la página de inicio u otra página después de eliminar
          navigate('/');
        })
        .catch((error) => {
          console.error('Error al eliminar el artículo:', error);
        });
    }
  };

  return (
    <div>
      <h1>Detalles del Artículo</h1>
      <h2>{article.name}</h2>
      <p>Descripción: {article.description}</p>
      <p>Precio: ${article.price}</p>
      <p>Condición: {article.condition}</p>
      <p>Categoría: {article.category}</p>
      <p>Vendido por: {article.seller.username}</p>
      <div className="images">
          {article.image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1} de productos`}
              className="image"
            />
          ))}
        </div>
        <div>
        {isOwner && (
          <div>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Eliminar</button>
          </div>
        )}
      </div>
     
    </div>
  );
}

export default ArticleDetail;
