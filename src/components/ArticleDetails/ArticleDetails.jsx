import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import "./ArticleDetails.css";

function ArticleDetail() {
  const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
  const { articleId } = useParams();
  const { user, isAdmin } = useContext(AuthContext);
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
    if (isOwner || isAdmin) {
      // Navega a la página de edición si es el propietario o es un administrador
      navigate(`/edit-article/${articleId}`);
    }
  };

  const handleDelete = () => {
    if (isOwner || isAdmin) {
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
    <div className="container">
      <div className="seller-info">
  <img
    src={article.seller.profileImage}
    alt={`Imagen de perfil del vendedor`}
    className="seller-image"
  />
  <p className="seller-name">{article.seller.username}</p>
</div>

      <div className="article-details">
        <img
          src={article.image[0]}
          alt={`Imagen del producto`}
          className="article-image"
        />
        <div className="article-info">
          <h1>€{article.price}</h1>
          <h2>{article.name}</h2>
          <h2>{article.condition}</h2>
          <p>Description: {article.description}</p>
        </div>
      </div>

      <div className="action-buttons">
        {(isOwner || isAdmin) && (
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleDetail;
