import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css'; // Importa tu archivo de CSS personalizado

function ArticleList() {
  const API_URL = 'http://localhost:5005';
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  

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
      <h1>Lista de Artículos</h1>
      <div className="category-buttons">
        <button className="category-buttons" onClick={() => setSelectedCategory('')}>
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterArticlesByCategory(category)}
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="article-list">
        {filteredArticles.map((article) => (
          <li key={article._id} className="article-card">
            <h2>{article.name}</h2>
            <p>Condición: {article.condition}</p>
            <p>Creado por: {article.seller.username}</p>
            <img className="image" src={article.imageUrl[0]} alt={article.title} />
            
              <Link to={`/article/${article._id}`}>Ver detalles</Link>
         
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;