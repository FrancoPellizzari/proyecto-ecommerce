import React from "react";
import { useState } from "react";


function HeaderNavbar({ filterText, onFilterTextChange }){
    

    return(
        <form>
        <input
          type="text"
          value={filterText}
          placeholder="Buscar..."
          onChange={(e) => onFilterTextChange(e.target.value)} 
        />
        </form>

    );
}

export default HeaderNavbar;

