import type { NextApiRequest, NextPage } from "next";

const ImgUpload: NextPage = () => {
  fetch("http://localhost:3000/api/hello", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  })
    .then(res => res.json())
    .then(json => console.log(json));
  return (
    <div>
      <h2>ImgUpload</h2>
      <input type={"file"}></input>
    </div>
  );
};

export default ImgUpload;
