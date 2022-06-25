import { OwnershipControlsRule } from "@aws-sdk/client-s3";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

const ImgUpload: NextPage = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  // const data = new FormData();

  const onClickSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!inputFileRef.current?.files?.length) {
      alert("No Files");
      return;
    }

    const formData = new FormData();

    Object.values(inputFileRef.current.files).forEach(file => {
      formData.append("file", file);
    });

    const data = (await (
      await fetch("http://localhost:3000/api/hello", {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(formData),
      })
    ).json()) as { status: "ok" | "fail"; message: string };

    // const data = (await response.json()) as {
    //   status: boolean;
    //   message: string;
    // };

    console.log(data);
    if (data.status) {
      inputFileRef.current.value = "";
    } else {
      console.log("fail");
    }
  };
  return (
    <div>
      <h2>ImgUpload</h2>
      <label htmlFor="image">Photo</label>
      <input
        type={"file"}
        id="image"
        accept="image/jpeg"
        hidden
        multiple
        ref={inputFileRef}
      ></input>
      <input type="submit" onClick={onClickSubmit} />
    </div>
  );
};

export default ImgUpload;
