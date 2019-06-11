import { useState, useEffect } from 'react';

const api = 'https://us-central1-portfolioapi-d2d22.cloudfunctions.net/api'

const useGetData = () => {
    
    
    const [mydata, setData] = useState([]);
    
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
        
    }, [])
    
    return mydata
}

export default useGetData;