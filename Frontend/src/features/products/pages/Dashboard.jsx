import { useSelector } from "react-redux";
import { useProduct } from "../hooks/useProduct";

const Dashboard = () => {
  const { handleGetSellerProduct } = useProduct()
  const sellerProducts = useSelector(state => state.product.sellerProducts)


  useEffect(() => {
    handleGetSellerProduct()
  }, [])


  return (
    <div>Dashboard</div>
  )
}
export default Dashboard