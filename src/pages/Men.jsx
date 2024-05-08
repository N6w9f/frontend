import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
//local needs
import men_banner from "../components/Assets/banner_mens.png";
import Sections from "../components/Sections/Sections";
import { useEffect, useState } from "react";

const Men = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  const query = useQuery().get("page");
  const page = query || 1;
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.urls.products);

  useEffect(() => {
    axios.get(`${url}men?page=${page}`).then((res) => setData(res.data));
  }, [url, page]);

  return <Sections image={men_banner} data={data} />;
};

export default Men;
