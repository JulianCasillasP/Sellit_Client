import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/:userId') // Ajusta la ruta de la API según tu configuración
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del usuario:', error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Perfil de Usuario</h2>
          <p>Nombre de usuario: {user.username}</p>
          <p>Correo electrónico: {user.email}</p>
          <p>Es administrador: {user.isAdmin ? 'Sí' : 'No'}</p>
        </div>
      ) : (
        <p>Cargando detalles del usuario...</p>
      )}
    </div>
  );
}

export default UserProfile;