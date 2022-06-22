import Styles from './ProductItem.module.css';

function ProductItem(props) {
    return <li key={props.item.id}>
        <div>
            <div className={Styles.image}>
                <img src={props.item.image} alt="No" />
            </div>
            <div className={Styles.content}>
                <h2>{props.item.product_name}</h2>
                <p>{props.item.description}</p>
                <h4>{props.item.price}</h4>
            </div>
            <div className={Styles.btn}>
                <button>Purchase</button>
            </div>
        </div>
    </li>;
}

export default ProductItem;