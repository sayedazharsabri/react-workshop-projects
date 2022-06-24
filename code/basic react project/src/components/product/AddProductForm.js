import Styles from './AddProductForm.module.css';
import CustomWrapper from '../layouts/CustomWrapper';
function AddProductForm() {
    return <CustomWrapper>
        <form className={Styles.form}>
            <div className={Styles.groups}>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" placeholder="" id="product_name" />

            </div>
            <div className={Styles.groups}>
                <label htmlFor="image">Image</label>
                <input type="text" placeholder="" id="image" />

            </div>
            <div className={Styles.groups}>
                <label htmlFor="price">Price</label>
                <input type="text" placeholder="" id="price" />

            </div>
            <div className={Styles.groups}>
                <label htmlFor="description">Description</label>
                <textarea rows="5" id="description" />

            </div>
            <div className={Styles.btn}>
                <button>Add</button>
            </div>
        </form>
    </CustomWrapper>
}


export default AddProductForm;