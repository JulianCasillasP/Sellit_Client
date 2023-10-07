import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import ArticleEdit from "./components/ArticleEdit/ArticleEdit";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
       


        <Route path="/article/:articleId" element={<ArticleDetails />} />
        <Route path="/edit-article/:articleId" element={<ArticleEdit />} />
        <Route path="/" element={<ArticleList />} />
        
      
      </Routes>
    </div>
  );
}

export default App;