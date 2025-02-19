'use client'
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { FaSpinner, FaDownload, FaCheckCircle } from "react-icons/fa";

const CreateImage = () => {
  const [formData, setFormData] = useState({
    prompt: "",        
    aspect_ratio: "1:1"
  });

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!formData.prompt) return alert("Please enter a prompt!");

    setLoading(true);
    setError(null);
    setImageUrl(null);
    setTimeTaken(null);
    
    const startTime = performance.now();

    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: { 
          ...formData,
          go_fast: true
        } }),
      });

      const data = await response.json();
      const endTime = performance.now();
      setTimeTaken(((endTime - startTime) / 1000).toFixed(3));

      if (response.ok) {
        setImageUrl(data.output);
      } else {
        throw new Error(data.error || "Failed to generate image.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "generated-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-start justify-center p-6 bg-gray-900 text-white min-h-screen gap-12">
        {/* Left Side: Form Inputs */}
        <div className="flex flex-col w-1/3">
          <h1 className="text-3xl font-bold mb-6">AI Image Generator</h1>
          <form onSubmit={handleGenerate} className="flex flex-col gap-4">
            <input
              type="text"
              name="prompt"
              placeholder="Enter your prompt..."
              value={formData.prompt}
              onChange={handleChange}
              className="p-3 border rounded-md text-black w-full"
              required
            />

            <select
              name="aspect_ratio"
              value={formData.aspect_ratio}
              onChange={handleChange}
              className="p-3 border rounded-md text-black w-full"
            >
              <option value="1:1">1:1 (Square)</option>
              <option value="16:9">16:9 (Landscape)</option>
              <option value="9:16">9:16 (Portrait)</option>
            </select>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded flex items-center justify-center"
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Generate Image"}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Right Side: Image Output */}
        <div className="flex flex-col items-center w-1/2">
          {loading && <FaSpinner className="animate-spin text-white text-4xl" />}
          {imageUrl && (
            <>
              <img src={imageUrl} alt="Generated" className="mt-6 rounded-lg shadow-lg w-full max-w-md" />
              <button
                onClick={handleDownload}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
              >
                <FaDownload /> Download
              </button>
              {timeTaken && (
                <p className="mt-4 text-green-400 flex items-center gap-2">
                  <FaCheckCircle /> Generated in {timeTaken} seconds
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateImage;
