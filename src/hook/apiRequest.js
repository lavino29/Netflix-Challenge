import { useEffect, useState } from "react";

export const ApiRequest = (url = "", parametros = "") => {
  const [data, setData] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (url === "") return;
    setData({
      data: null,
      loading: true,
      error: false,
    });
    fetch(`${url}/${parametros}`)
      .then((res) => res.json())
      .then((data) =>
        setData({
          data,
          loading: false,
          error: false,
        })
      )
      .catch((error) =>
        setData({
          data: null,
          loading: false,
          error: true,
        })
      );
  }, [parametros, url]);

  return data;
};
