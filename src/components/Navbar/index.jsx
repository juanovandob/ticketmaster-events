//Componente genérico. La sintaxis básica de un componente
//es una función flecha. y un export
/**
 * const Navbar = () => {};
 * 
 * export default Navbar;
 */
//First component
const Navbar = () => {
    return (
        <div>
            <p>Eventos</p>
            <input placeholder="Busca tu evento favorito"/>
        </div>
    );
};

export default Navbar;
