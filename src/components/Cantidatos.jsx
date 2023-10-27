import "../css/Cantidatos.css";

export const Cantidatos = ({ cantidatos }) => {
  return (
    <div className="cantidatos mt-4">
      {cantidatos.map((value, index) => {
        return (
          <div href="#" key={index} className="cantidato">
            <div className="group-img" title={value.descripcion}>
              <img src={value.img} alt={value.nombre} />
              <div className="group-title">
                <h3 className="text-light text-center">{value.nombre}</h3>
              </div>
              <div className="group-simbol">
                <img
                  src={value.simbolo}
                  alt={value.nombre}
                  width={30}
                  height={60}
                />
              </div>
            </div>
            <div className="group-content container">
              <div className="row">
                <button className="col btn btn-success btn-vote">
                  <i class="bi bi-check2-circle text-light"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
