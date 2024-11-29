export class ProductService{
    #handlePromise = async({ url, method="GET", body=null})=>{
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${url}`,{
                method,
                body: body ? JSON.stringify(body) : null
            })
            return await response.json();
        }catch(err){
            console.log(err + 'here')
        }
    }

    async getProducts(){
        const response = await this.#handlePromise({url:""});
        return response;
    }

    async getProductById(id){
        const response = await this.#handlePromise({url:`${id}`});
        return response;
    }

    async deleteProductById(id){
        const response = await this.#handlePromise({url:`${id}`, method:'DELETE'});
        return response;
    }

}

class Product{
    constructor({category,description,id,image,title,price,rating}){
        this.id = id;
        this.category = category;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.title = title;
        this.price = price;
    }
    productService = new ProductService();
    id;
    category;
    description;
    image;
    rating;
    title;
    price;
}

const product = new Product({
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }

});
const productService = new ProductService();
const productServiceLength = await productService?.getProducts()
// console.log(productServiceLength.length)