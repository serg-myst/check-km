import axios from "axios";
import { useState, useEffect } from "react";
import "./MarkInfo.css";
import Info from './Info';

function MarkInfo ({mark}) {
  const [data, setData] = useState([]);

  const url = 'http://192.168.56.98:7009/marks-info/';

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
