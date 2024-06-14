import axios from "axios";
import { useState, useEffect } from "react";
import "./MarkInfo.css";
import Info from './Info';

function MarkInfo ({mark}) {
  const [data, setData] = useState([]);

  const url = import.meta.env.VITE_API_URL;

  const body = {
    'mark': `${mark}`
  }

  const fetchMark = () => {
    axios({method: 'post', url: url, data: body, headers: {
      "Content-type": "application/json; charset=UTF-8"
    }}).then((resp) => {
      setData(resp.data);
    });
    }

    useEffect(() => {
      fetchMark();
  },[]);

  return (
    <Info data={data}/>
  )
}

export default MarkInfo
