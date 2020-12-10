import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { db, storage } from "./firebase";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter a caption...."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />
      <Input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
