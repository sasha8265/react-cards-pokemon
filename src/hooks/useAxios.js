import React, { useState } from "react"
import uuid from "uuid";
import axios from "axios";


/** should take in a URL, and should return an array with two elements. 
 * The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
 * The second element is a function that will add a new object of data to our array. */

const useAxios = (baseUrl, restOfUrl="") => {
    const [responses, setResponses] = useState([]);

    const addResData = async () => {
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        console.log(res)
        setResponses(data => [...data, { ...res.data, id: uuid() }]);
    };
    return [responses, addResData]
}

export default useAxios;