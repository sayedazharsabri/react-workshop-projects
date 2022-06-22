import Styles from './ProductList.module.css';

import ProductItem from "./ProductItem";


function ProductList(props){
    return <ul className={Styles.list}>
        {props.products.map((item)=>{
            return <ProductItem item={item}/>
        })}
    </ul>
}

export default ProductList;