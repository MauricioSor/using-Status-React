const Titulo = ({nuevoTitulo,estado}) => {
    return (
        <section className="text-center">
        <h1 >¡Hello {nuevoTitulo}{estado}</h1>
        </section>
    );
};
export default Titulo;