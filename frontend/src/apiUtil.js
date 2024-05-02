import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/",
    // withCredentials: true
})

const ENDPOINTS = {
    POSTDATA: "router/postServerData",
    GETDATA: "router/getServerData"
}

export const getdataApi = () => {
    return instance.get(ENDPOINTS.GETDATA);
}

// export const postdataApi = () => {
//     return instance.post(ENDPOINTS.POSTDATA);
// }