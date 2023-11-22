//Componente genérico. La sintaxis básica de un componente
//es una función flecha. y un export
/**
 * const Navbar = () => {};
 *
 * export default Navbar;
 */
import { useState } from "react";

//First component
const Navbar = () => {
  //search = valor del input (puede tener cualquier nombre), setSearch = función que actualiza el valor del input
  const [search, setSearch] = useState("");

  const handleInputChange = (evt) => {
    //setSearch mantiene actualizado el valor del input
    setSearch(evt.target.value);
  };

  console.log(search);
  return (
    <div>
      <p>Mi Boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        //acá se define el evento que llama a la funcion
        onChange={handleInputChange}
        value={search}
      />
    </div>
  );
};

export default Navbar;
