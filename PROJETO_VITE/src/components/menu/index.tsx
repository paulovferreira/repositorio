import { Link } from "react-router-dom"

function Menu(){
    return(
        <div className="menu-container">
            <div className="menu-div1">
                <Link to='/sobre'> SOBRE - ROUTE </Link>
            </div>
            <div className="menu-div1">
                <Link to='/sobre/Paulo'> SOBRE - Paulo </Link>               

            </div>
            <div className="menu-div1">
               <Link to='/sobre/Pedro'> SOBRE - Pedro </Link>

            </div>

        </div>
    )
}

export default Menu