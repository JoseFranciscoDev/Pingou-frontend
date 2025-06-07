import "./App.css";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <div className="aside">
        <div className="titulo-aside-area">
          <a href="">
            <h1>Pingou</h1>
          </a>
        </div>
        <a href="">
          <h3>Perfil</h3>
        </a>
        <a href="">
          <h3>Pingar</h3>
        </a>
      </div>
      <div className="main">
        <Post usuario="jose" imagem="baleia.jpeg" />
        <Post usuario="jose" imagem="baleia.jpeg" />
        <Post usuario="jose" imagem="baleia.jpeg" />
        <Post usuario="jose" imagem="baleia.jpeg" />
      </div>
    </>
  );
}

export default App;
