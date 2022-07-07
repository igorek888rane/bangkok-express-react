import axios from "axios";


export default  class ProductService{
  static async getAll(){
      const response =  await axios.get('http://localhost:5000/api/product');
        return response.data
    }
    static async sendForm(data){
      return await axios.post('https://httpbin.org/post', data)

    }
}