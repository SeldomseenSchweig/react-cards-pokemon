import { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";


const useAxios = (url, options = {}) => {

  const [response, setResponse] = useState([]);

  // after the first render, fetch our data
  const setData = async (name='') => {
      console.log(name)
      if (!name){
          url = url
      }else{
          url = url + name
      }
 
    try {
      const res = await axios.get(url);
      setResponse(data => [...response, { ...res.data, id: uuid() }]);
    } catch (error) {
      console.log(error);
    }
  };
//   useEffect(() => {
//     try {
//         const res = await axios.get(url);
//         const json = await res.json();
//         setResponse(data => [...response, { ...json.data, id: uuid() }]);
//       } catch (error) {
//         console.log(error);
//       }
      

//   }, [response]);

  return [response, setData] ;
};

export default useAxios;