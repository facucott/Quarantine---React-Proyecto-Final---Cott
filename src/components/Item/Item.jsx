import "../Item/Item.scss";
import { Link } from 'react-router-dom'


const Item = ({ id, img }) => {

    return (

        
        <>

        <div className="col-lg-4 col-md-6 col-sm-12">

        <div className="item-container">

            <div className="item-image">
                <img className="image" src={img} alt="Same alt value" />
            </div>
            
            <div className="divBotonDetalle">
                <Link to= {`/item/${id}`}><button className="botonDetalle">DETALLES</button></Link>
            </div>
            </div>

        </div>

        </>
        
        );
}

export default Item;