import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "../styles/Post.css";
import type { PostProps } from "../types/PostType";

const Post = ({ usuario, imagem }: PostProps) => {
  const [likado, setLikado] = useState<boolean>(false);
  const [animando, setAnimando] = useState<boolean>(false);
  const handleLike = () => {
    setLikado(!likado);
    setAnimando(true);
    fetch("http://127.0.0.1:8000/helloword")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setTimeout(() => setAnimando(false), 300);
    console.log("Likado");
  };
  return (
    <div className="post">
      <div className="post-perfil">
        <h5>{usuario}</h5>
      </div>
      <div className="post-image">
        <img src={imagem} alt={imagem} />
      </div>
      <FaHeart
        className={`heart-icon ${animando ? "clicked" : ""}`}
        onClick={handleLike}
        color={likado ? "red" : "white"}
        size={32}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export { Post };
