
const Boton = ({setEstado}) => {
    return (
        <div>
        <button className="btn btn-primary" onClick={()=>setEstado('(from changed state)!')}>Click me to add!</button>
        <button className="btn btn-danger" onClick={()=>setEstado('')}>Click me to delete!</button>
        </div>
    );
};

export default Boton;