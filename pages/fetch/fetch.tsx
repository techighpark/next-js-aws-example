import type { NextApiRequest, NextPage } from "next";

const Fetch: NextPage = () => {
  const data = "fetch post data";
  fetch("http://localhost:3000/api/hello", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(json => console.log(json));
  return <div>Fetch</div>;
};

export default Fetch;
