import { useState } from "react";
import { useDropzone } from "react-dropzone";

const Upload = ({ onFilesSelected }) => {
  const [video, setVideo] = useState(null);
  const [srt, setSrt] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "video/*": [], "text/srt": [] },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        if (file.type.startsWith("video/")) setVideo(file);
        if (file.name.endsWith(".srt")) setSrt(file);
      });
    },
  });

  return (
    <div {...getRootProps()} style={{ border: "2px dashed white", padding: 20, cursor: "pointer" }}>
      <input {...getInputProps()} />
      <p>Drag & drop a Video and an SRT file, or click to select</p>
      {video && <p>📹 {video.name}</p>}
      {srt && <p>📝 {srt.name}</p>}
      {video && srt && (
        <button onClick={() => onFilesSelected(video, srt)}>Generate Video</button>
      )}
    </div>
  );
};

export default Upload;
