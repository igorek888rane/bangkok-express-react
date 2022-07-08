import axios from "axios";


export default  class ProductService{
  static async getAll(){
      const response =  await axios.get('https://bangkok-express.herokuapp.com/api/product');
        return response.data
    }
    static async sendForm(data){
      return await axios.post('https://httpbin.org/post', data)

    }
}