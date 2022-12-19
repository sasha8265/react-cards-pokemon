import { useState } from "react"
import axios from "axios";


/** should take in a URL, and should return an array with two elements. 
 * The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
 * The second element is a function that will add a new object of data to our array. */

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);

    const addResData = async (formatter = data => data, restOfUrl="") => {
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        console.log(res)
        setResponses(data => [...data, formatter(res.data)]);
    };
    return [responses, addResData]
}

export default useAxios;