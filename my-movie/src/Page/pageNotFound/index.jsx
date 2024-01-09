import { useNavigate } from "react-router-dom";
import useStore from "../../Utility/useStore/store";
const NotFoundPage = () => {
  const { isAuthenticated } = useStore();
  const navigate = useNavigate();

  const handleBackClick = (e) => {
    e.preventDefault();

    navigate(-1); // Naviga alla pagina precedente
    console.log(isAuthenticated, "from page 404--------");
  };
  return (
    <div>
      <h1>404 - Pagina Non Trovata</h1>
      <p>Spiacenti, la pagina che stai cercando non esiste.</p>
      {/* Puoi aggiungere un link per tornare alla home page o altre indicazioni utili */}
      <button onClick={(e) => handleBackClick(e)}>
        Torna alla pagina precedente
      </button>
    </div>
  );
};

export default NotFoundPage;
