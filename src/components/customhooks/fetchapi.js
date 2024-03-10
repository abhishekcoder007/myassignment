import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err) =>
        alert(err.message + " pls. check the url and connection")
      );
  }, []);

  return { alldata: data };
}

export default useFetch;
