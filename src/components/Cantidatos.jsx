import '../public/css/cantidatos.css'

export const Cantidatos = ({cantidatos}) => {
  return (
    <div className="cantidatos mt-4">

      {cantidatos.map((value, index) => {
        return (
          <article className="cantidato">
            <img src={value.img} alt={value.name} />
            <h2>{value.name}</h2>
            <button className='btn btn-success'>Votar</button>
          </article>
        )
      })}

    </div>
  )
}
