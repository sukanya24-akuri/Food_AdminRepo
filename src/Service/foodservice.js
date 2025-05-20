import axios from "axios";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

const api_url = 'http://localhost:8081/api/food';
export const addFood = async (foodData, image) => {

    const formData = new FormData();
    formData.append('entity',JSON.stringify(foodData));
    formData.append('file', image);
    try {
        await axios.post(api_url, formData, { headers: { "Content-Type": "multipart/form-data" } });
    }
    catch (error) {
        console.log('Error -occured in add food', error);
        throw error;
    }
}
//getALl
export const getFoodList = async () => {
    try {
        const response = await axios.get(api_url);
        return response.data;
    } catch (error) {
        console.log('error', error);

        throw error;
    }
}
//deleteID
export const deleteFood = async (foodId) => {
    try {
        const res = await axios.delete(api_url + "/" + foodId);
        return res.data;
    }

    catch (error) {
        console.log('error', error);

        throw error;
    }
}