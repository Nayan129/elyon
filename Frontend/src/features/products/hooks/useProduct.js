import { useDispatch } from "react-redux";
import { createProduct,getSellerProduct } from "../services/products.api.js";
import { setSellerProducts } from "../state/product.slice.js";

export const useProduct = () => {
  
  const dispatch = useDispatch();

  async function handleCreateProduct(formData) {
    const data = await createProduct(formData);
    return data.product
  }

  async function handleGetSellerroduct() {
    const data = await getSellerProduct();
    dispatch(setSellerProducts(data.products))
    return data.products
  }

  return {handleCreateProduct,handleGetSellerroduct}
}