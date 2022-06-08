import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, useMockWait) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const _items = (await axios.get(url)).data;
      if (useMockWait) {
        setTimeout(() => {
          setItems(_items);
        }, Math.floor(Math.random() * 2000) + 1000);
      } else {
        setItems(_items);
      }
    })();
  }, []);

  return {
    items,
    itemTotal: items.length,
    isLoading: items.length === 0,
  };
};
