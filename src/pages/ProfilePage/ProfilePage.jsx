import React, { useState, useContext } from 'react';
import CreateArticle from '../../components/ArticleForm/ArticleForm';
import ArticleUser from '../../components/ArticleUser/ArticleUser';
import UserProfile from '../../components/UserProfile/UserProfile';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom'; 
import "./ProfilePage.css";

function ProfilePage() {
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate(); 

  const toggleCreateArticle = () => {
    setShowCreateArticle(!showCreateArticle);
  };

  // Función para manejar la creación del artículo y la redirección
  const handleArticleCreated = () => {
    setShowCreateArticle(false); // Oculta el formulario después de la creación
    navigate('/profile'); 
  };

  return (
    <div className="profile-page">
    
      {showCreateArticle ? (
        <CreateArticle onArticleCreated={handleArticleCreated} />
      ) : (
        <button className="create-article-button" onClick={toggleCreateArticle}>
          Create Article.
        </button>
      )}
      
      
     <div classname="user-profile">
      {showCreateArticle ? null : <UserProfile />}
      </div>
      <div classname="article-user">
      {showCreateArticle ? null : <ArticleUser user={authContext.user._id} />}
      </div>
    </div>
  );
}

export default ProfilePage;
