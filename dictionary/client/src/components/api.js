const fetchWordData = async (word) => {
    try{
        const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`,{
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_WORDS_API_KEY,
                'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        });

        if(!response.ok){
            alert('Fail');
            throw new Error('Failed to fetch word data');
        }

        const data = await response.json();
        return data;
    }
    catch (error){
        throw error;
    }
}

export {fetchWordData};