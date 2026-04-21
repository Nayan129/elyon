import axios from "axios";

const authApiInstance = axios.create({
    baseURL: "/api/auth",
    withCredentials: true,
})

// register user 
export async function register({ email, contact, password, fullname, isSeller }) {

    const response = await authApiInstance.post("/register", {
        email,
        contact,
        password,
        fullname,
        isSeller
    })
    return response.data
}

// login user 
export async function login({ email, password }) {
    const response = await authApiInstance.post("/login", {
        email, password
    })

    return response.data
}

// get current user
export async function getMe() {
    const response = await authApiInstance.get("/me")

    return response.data
}