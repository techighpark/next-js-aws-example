import axios from "axios";
import type { NextApiRequest, NextPage } from "next";

const Axios: NextPage = () => {
  const axiosFn = async () => {
    const { data } = await axios("http://localhost:3000/api/hello");
    console.log(data);
  };

  axiosFn();

  return <div>Axios</div>;
};

export default Axios;
