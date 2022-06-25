import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// interface Photo {
//   photo: string;
// }
interface UploadForm {
  photo: FileList;
}

const Home: NextPage = () => {
  const [thumb, setThumb] = useState<string>();
  const { register, handleSubmit, watch } = useForm<UploadForm>();

  const onValid = (data: UploadForm) => {
    console.log(data);
  };

  const photo = watch("photo");
  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setThumb(URL.createObjectURL(file));
    }
  }, [photo]);

  return (
    <div>
      <h3>Next JS AWS Study</h3>
      <div>Image Upload</div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("photo")} type="file" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
