import { Categories, ListResponse } from "../models";
import axiosClient from "./axiosClient";

const categoriesApi = {
    getAll(): Promise<Categories> {
        const url = 'http://localhost:1337/api/categories';
        return axiosClient.get(url);
    }
}

export default categoriesApi;