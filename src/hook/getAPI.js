import { useEffect, useState } from "react";
import axios from "axios";


export default function getAPI(url) {
  const [data, setData] = useState;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
      var swapi = response.data.results 
        setData(swapi);
      });
  }, [setData, url]);

  return { data }
}
