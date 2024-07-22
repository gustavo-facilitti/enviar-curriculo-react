import { Link } from "react-router-dom";

import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="title">Error 404</h2>
      <p className="title">Página não encontrada...</p>
      <button className="back-btn">
        <Link to="/">&larr; Voltar para formulário</Link>
      </button>
    </div>
  );
};
export default NotFound;
