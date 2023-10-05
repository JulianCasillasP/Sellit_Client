import React, { useState, useContext } from 'react';
import CreateArticle from '../../components/ArticleForm/ArticleForm';
import ArticleUser from '../../components/ArticleUser/ArticleUser';
import { AuthContext } from '../../context/auth.context';

function ProfilePage() {
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const authContext = useContext(AuthContext);

  const toggleCreateArticle = () => {
    setShowCreateArticle(!showCreateArticle);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {showCreateArticle ? (
        <CreateArticle />
      ) : (
        <button onClick={toggleCreateArticle}>Crear Artículo</button>
      )}
      <ArticleUser user={authContext.user._id} />
    </div>
  );
}

export default ProfilePage;