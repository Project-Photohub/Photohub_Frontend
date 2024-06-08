import axios from "axios";
import {serverInfo} from "../module/request/RequestSender";

export const AxiosConfigure = () => {
    axios.defaults.baseURL = serverInfo.PROTOCOL + "://" + serverInfo.HOST

    return <></>
}