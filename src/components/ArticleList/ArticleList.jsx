import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css';
import { AuthContext } from '../../context/auth.context';

function ArticleList() {
  const API_URL = 'http://localhost:5005';
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { isLoggedIn } = useContext(AuthContext);

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

  // Traducción de categorías
  const categoryTranslations = {
    clothes: 'Clothes',
    shoes: 'Shoes',
    electronics: 'Electrónics',
    jewels: 'Jewels',
  };

  // Obtén todas las categorías únicas de los artículos
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  // Función para filtrar artículos por categoría
  const filterArticlesByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filtrar artículos según la categoría seleccionada
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div>
      <div className="category-buttons">
        <button className={`button ${selectedCategory === '' ? 'active' : ''}`} onClick={() => setSelectedCategory('')}>
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`button ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => filterArticlesByCategory(category)}
          >
            {categoryTranslations[category] || category}
          </button>
        ))}
      </div>

      {articles.length === 0 ? (
        <p>There are no items available.</p>
      ) : (
        <div className="article-list">
          {filteredArticles.map((article) => (
            <div key={article._id} className="article-card">
              <div className="article-image">
                <img className="image" src={article.image[0]} alt={article.title} />
              </div>
              <div className="article-details">
                <h1>{article.name}</h1>
                <h3>€{article.price}</h3>
                {isLoggedIn && (
                  <Link to={`/article/${article._id}`} className="details-button">
                    Ver detalles
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleList;
