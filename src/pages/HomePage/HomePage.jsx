import CreateArticle from "../../components/ArticleForm/ArticleForm";
import ArticleList from "../../components/ArticleList/ArticleList";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      
      <h1>Home page</h1>
      <CreateArticle/>
      <ArticleList/>

    </div>
  );
}

export default HomePage;
