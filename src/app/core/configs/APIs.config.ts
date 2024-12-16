import { environment } from "../../../environments/environment";

export class APIs {
  //server
  public static apiUrl = environment.apiUrl;

  public static Products = {
    GetCategoriesList: `${this.apiUrl}/products/categories/`,
    GetCategory: `${this.apiUrl}/products/category/`,
    GetProductsList: `${this.apiUrl}/products/`,
    GetProduct: `${this.apiUrl}/products/`,
    DeleteProduct: `${this.apiUrl}/products/`,
    AddProduct: `${this.apiUrl}/products/`,
  };
}
