import { setError,setLoading,setUser } from "../state/auth.slice.js";
import { register } from "../services/auth.api.js";
import { useDispatch } from "react-redux";

export const useAuth = () => {
    const dispatch = useDispatch();

    async function handleRegister ({email,password,contact,fullname,isSeller = false}){
      dispatch(setLoading(true))
      const data = await register({email,password,contact,fullname,isSeller});
       dispatch(setUser(data.user));
    }

    return {handleRegister}
}