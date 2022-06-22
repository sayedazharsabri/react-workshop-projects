import ProductList from "../components/product/ProductList";

function Product() {
    let products = [
        {
            id: 'p1',
            product_name: "Brown City Tour",
            image: "https://drive.google.com/uc?id=1uxnuXdDYv_u9GllKhEkus73_D1h39Z2r",
            description: "Its a good tour Its a good tour Its a good tour Its a good tour Its a good tour Its a good tour Its a good tour ",
            price: "20000"
        },
        {
            id: 'p2',
            product_name: "Forest Tour",
            image: "https://drive.google.com/uc?id=1NGU1dwCECTZyYrZCuOON88RL0kC5wAQf",
            description: "Its a refresher tour Its a refresher tour Its a refresher tour Its a refresher tour Its a refresher tour Its a refresher tour Its a refresher tour ",
            price: "50000"
        },
        {
            id: 'p3',
            product_name: "River Side Tour",
            image: "https://drive.google.com/uc?id=1l9dc62FQJOup7-64p7E0xeh3AC6zZsPl",
            description: "Its a tour to enjoy the river",
            price: "100000"
        }
    ];
    return <div>
        <ProductList products={products} />
    </div>
}

export default Product;