import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

export const uploadToS3 = async (
  file: any,
  user: string,
  folderName: string
) => {
  console.log(file, user, folderName);
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${filename}-${Date.now}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "marvle-fitness",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
