import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //
        //TODO get auth-token from a cookie
        //first we need to store cookie with backend when logged in
        //read cookie and pass it in a header
        //
        const myHeader = new Headers();
        myHeader.append('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUwY2Y5NWFjZmJmNjNlZDQzYzczYTgiLCJpYXQiOjE2MTU5NzgwMDh9.KmweHWuUWaOq1UBQttJFwpPzCLeQC2S-RR-juHjye-M');
        const abortCont = new AbortController();
        
        fetch(url, { 
            signal : abortCont.signal,
            headers: myHeader
        })
        .then(res => {
            if(!res.ok){
                throw Error('No resource found');

            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('Fetch aborted');
            }
            else{
            setIsPending(false);
            setError(err.message);
            }
        })

        return () => abortCont.abort();
     },[url]);

     return { data, isPending, error }
}

export default useFetch;