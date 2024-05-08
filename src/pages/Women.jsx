import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// local needs
import women_banner from "../components/Assets/banner_women.png";
import Sections from "../components/Sections/Sections";

const Women = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.urls.products);

  useEffect(() => {
    axios.get(`${url}women?page=${page}`).then((res) => setData(res.data));
  }, [url, page]);

  return (
    <Sections image={women_banner} data={data} state={{ page: setPage }} />
  );
};

export default Women;
