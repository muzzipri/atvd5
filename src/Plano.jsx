import "./Plano.css";
function Plano ({title ,valor ,qnt_users ,qnt_projetos}){
    return (
        <div className="plano-container">
            <h3 className="plano-titulo">{title}</h3>
            <h4 className="plano-valor">{valor}</h4>
            <p className="plano-users">{qnt_users}</p>
            <p className="plano-qntd">{qnt_projetos} </p>
            <button> clique aqui!</button>
            </div>
    );

}
export default Plano;