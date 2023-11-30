import axios from "axios";

const BASE_URL = "http://localhost:8080"

class ProductService {

    saveProduct(product) {
        return axios.post(BASE_URL + "/saveProduct", product);

    }

    getAllProducts() {
        return axios.get(BASE_URL + "/getAllProducts");
    }

    getProductByID(id) {
        return axios.get(BASE_URL + "/getById/" + id);
    }

    deleteProduct(id) {
        return axios.delete(BASE_URL + "/deleteProduct/" + id);
    }

    editProduct(product) {
        return axios.post(BASE_URL + "/editProduct/" + product.id, product);
    }
}

export default new ProductService;