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
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleName = (e) => setUsername(e.target.value);
  const handleAdminPassword = (e) => setAdminPassword(e.target.value); 

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    // Resto del código para enviar la solicitud de registro
    const requestBody = { email, password, username, adminPassword }; 

    authService
      .signup(requestBody)
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

        <label>Confirmar Contraseña:</label>
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
        <label>Contraseña de Administrador:</label>
        <input
          type="password"
          name="adminPassword"
          value={adminPassword}
          onChange={handleAdminPassword}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>¿Ya tienes una cuenta?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
