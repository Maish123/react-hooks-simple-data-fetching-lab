import React, { useEffect,useState } from "react";



function App(){
    const[dogData, setDogData]= useState([])
    const[fetchData, setFetchData]= useState(false)

    useEffect(()=>{
        console.log("after")
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((respObj)=>{
            setDogData(respObj.message)
            setFetchData(true);
        })
    },[]);

    console.log("before")

    if(!fetchData){
        return <p>"Loading..."</p>  
    }

    return(
        <img
        src={dogData}
        alt="A Random Dog"
        />
    )
};

export default App;

// create your App component here
