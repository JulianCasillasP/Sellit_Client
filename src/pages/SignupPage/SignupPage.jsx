import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null); // Nuevo estado para la imagen de perfil
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleName = (e) => setUsername(e.target.value);
  const handleAdminPassword = (e) => setAdminPassword(e.target.value);
  
  // Nuevo manejador para cargar una imagen de perfil
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    // Crear un objeto FormData para enviar la imagen de perfil
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("username", username);
    formData.append("adminPassword", adminPassword);
    formData.append("profileImage", profileImage); // Agregar la imagen de perfil al formulario

    authService
      .signup(formData) // Modifica tu servicio para que acepte FormData
      .then((response) => {
        // Si la solicitud es exitosa, redirige al usuario
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <label>Username:</label>
        <input type="text" name="name" value={username} onChange={handleName} />

        {/* Nuevo campo para la contraseña de administrador */}
        <label>Admin Password:</label>
        <input
          type="password"
          name="adminPassword"
          value={adminPassword}
          onChange={handleAdminPassword}
        />

        {/* Nuevo campo para cargar una imagen de perfil */}
        <label>Profile Image:</label>
        <input
          type="file"
          accept="image/*"
          name="profileImage"
          onChange={handleProfileImage}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have a account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
