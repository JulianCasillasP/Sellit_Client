import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import './ArticleUser.css'; 
import { useNavigate } from 'react-router-dom'; 
function ArticleUser() {
  const API_URL = 'http://localhost:5005';
  const authContext = useContext(AuthContext);
  const [userArticles, setUserArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (authContext.isLoggedIn) {
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

  const handleEdit = (articleId) => {
    navigate(`/edit-article/${articleId}`);
  };

  const handleDelete = (articleId) => {
    axios
      .delete(`${API_URL}/article/${articleId}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error al eliminar el artículo:', error);
      });
  };
  
  return (
    <div>
      <h1>My items for sale:</h1>
      <ul className="article-list">
        {userArticles.map((article) => (
          <li key={article._id} className="article-card">
            <h2>{article.name}</h2>
            <p>Description: {article.description}</p>
            <p>Price: €{article.price}</p>
            <p>Condition: {article.condition}</p>
            <img className="image" src={article.image[0]} alt={article.title} />
            <div className="action-buttons">
              <button onClick={() => handleEdit(article._id)}>Edit</button>
              <button onClick={() => navigate(`/article/${article._id}`)}>details</button>
              <button className="delete" onClick={() => handleDelete(article._id)}>Delete</button>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleUser;
