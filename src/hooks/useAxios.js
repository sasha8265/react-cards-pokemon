import React, { useState } from "react"
import uuid from "uuid";
import axios from "axios";


/** should take in a URL, and should return an array with two elements. 
 * The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
 * The second element is a function that will add a new object of data to our array. */

const useAxios = (url) => {
    const [responses, setResponses] = useState(null);
    const [error, setError] = useState(null);

    const addResData = async () => {
        try {
            const res = await fetch(url);
            setResponses(responses => [...responses, { ...res.data, id: uuid() }]);
        } catch (err) {
            setError(err);
        }
    };
    return {responses, error, addResData}
}

export default useAxios;