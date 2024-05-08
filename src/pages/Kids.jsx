import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
// local needs
import kids_banner from "../components/Assets/banner_kids.png";
import Sections from "../components/Sections/Sections";

const Kids = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery().get("page");
  const page = query || 1;
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.urls.products);

  useEffect(() => {
    axios.get(`${url}kids?page=${page}`).then((res) => setData(res.data));
  }, [url, page]);

  return <Sections image={kids_banner} data={data} />;
};

export default Kids;
