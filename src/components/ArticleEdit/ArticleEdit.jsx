import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ArticleEdit() {
  const API_URL = 'http://localhost:5005';
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    condition: 'new',
    category: 'clothes',
    imageUrl: '',
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/article/${articleId}`)
      .then((response) => {
        const articleData = response.data;
        setFormData({
          name: articleData.name,
          description: articleData.description,
          price: articleData.price,
          condition: articleData.condition,
          category: articleData.category,
          imageUrl: articleData.imageUrl,
        });
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del artículo:', error);
      });
  }, [articleId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/article/${articleId}`, formData)
      .then((response) => {
        console.log('Artículo editado:', response.data);
        navigate(`/article/${articleId}`);
      })
      .catch((error) => {
        console.error('Error al editar el artículo:', error);
      });
  };

  return (
    <div className="container">
      <h1>Editar Artículo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Condición:
          <select
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            required
          >
            <option value="new">Nuevo</option>
            <option value="like new">Como Nuevo</option>
            <option value="used">Usado</option>
          </select>
        </label>
        <label>
          Categoría:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="clothes">Ropa</option>
            <option value="shoes">Zapatos</option>
            <option value="jewels">Joyas</option>
            <option value="electronics">Electrónica</option>
          </select>
        </label>
        <label>
          URL de la imagen:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ArticleEdit;
