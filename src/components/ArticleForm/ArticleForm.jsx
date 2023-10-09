import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/auth.context'
import './ArticleForm.css'
import { useNavigate } from 'react-router-dom'

function ArticleForm() {
  const API_URL = 'http://localhost:5005'
  const [articleData, setArticleData] = useState({
    name: '',
    description: '',
    price: 0,
    condition: 'new',
    category: 'clothes',
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (authContext.isLoggedIn) {
      setArticleData({ ...articleData, seller: authContext.user._id })
    }
  }, [articleData, authContext])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setArticleData({
      ...articleData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formDataWithImage = new FormData()
    Object.entries(articleData).forEach(([key, value]) => {
      formDataWithImage.append(key, value)
    })

    formDataWithImage.append('image', selectedImage)

    axios
      .post(`${API_URL}/article/add`, formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the correct content type for file upload
        },
      })
      .then((response) => {
        console.log('Artículo creado:', response.data)

        // Navega a la página de inicio después de crear el artículo
        navigate('/')
      })
      .catch((error) => {
        console.error('Error al crear el artículo:', error)
      })
  }

  return (
    <div>
      <h1>Crear Artículo</h1>
      <form className="container" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={articleData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={articleData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={articleData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Condición:
          <select
            name="condition"
            value={articleData.condition}
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
            value={articleData.category}
            onChange={handleInputChange}
            required
          >
            <option value="clothes">Ropa</option>
            <option value="shoes">Zapatos</option>
            <option value="jewels">Joyas</option>
            <option value="electronics">Electrónica</option>
          </select>
        </label>
        <label htmlFor="product-image">
          Imagen:
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            multiple
            accept="image/*"
            required
          />
        </label>
        <button type="submit">Crear Artículo</button>
      </form>
    </div>
  )
}

export default ArticleForm