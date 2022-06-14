import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

// interface Photo {
//   photo: string;
// }
interface UploadForm {
  photo: FileList;
}

const Home: NextPage = () => {
  const [thumb, setThumb] = useState<string[]>();
  const [progress, setProgress] = useState<number>(0);
  const { register, handleSubmit, watch } = useForm<UploadForm>();

  const onValid = async (data: UploadForm) => {
    const hello = await fetch("/api/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.photo[0]),
    });
    console.log(hello);
  };
  const onChange = () => {
    console.log("change");
  };

  return (
    <div>
      <h3>Next JS AWS Study</h3>
      <div>Image Upload</div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("photo")}
          type="file"
          accept="image/*"
          multiple
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
