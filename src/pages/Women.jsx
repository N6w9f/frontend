import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

// local needs

import women_banner from "../components/Assets/banner_women.png";
import Sections from "../components/Sections/Sections";
import { useState, useEffect } from "react";

const Women = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  const query = useQuery().get("page");
  const page = query || 1;
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.urls.products);

  useEffect(() => {
    axios.get(`${url}women?page=${page}`).then((res) => setData(res.data));
  }, [url, page]);

  return <Sections image={women_banner} data={data} />;
};

export default Women;
