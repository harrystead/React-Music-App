import useState from 'react';


async function GetMusicData(){
    const [errorMessage, setErrorMessage] = useState(null);
    fetch("http://localhost:4000/hello")
    .then(async response => {
      const data = await response.json();

      if(!response.ok){
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      return data;
    })
    .catch(error => {
      setErrorMessage(error.toString());
      console.error("There was an error: ", error);
    })
  }

  export default GetMusicData;