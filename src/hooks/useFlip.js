import { useState } from "react"

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const toggleFlip = () => {
        setState(state => !state);
    };
    return [state, toggleFlip]
}

export default useFlip;