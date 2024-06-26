import axios from "axios";
import {BASE_URL, FRONT_BASE_URL} from "../module/request/ServerInfo";

export const AxiosConfigure = () => {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.common["Content-Type"] = "application/json"

    axios.defaults.withCredentials = true

    return <></>
}