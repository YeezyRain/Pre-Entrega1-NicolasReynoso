import Brand from "./Brand";
import ItemListContainer from "./ItemsListContairner";
import CartWidget from "./CartWidget";

const NavBar  = () => {
    return (
        <header>
            <div className="containerBrand">
                  <Brand />  
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                itemUno = "Juegos"
                itemDos = "Tarjetas de regalo"
                itemTres = "Keys"
                itemCuatro = "Skins" 
                />
            </nav>
            
            <div className="containerCart">
                <CartWidget />
            </div>

        </header>
    )
}

export default NavBar; 