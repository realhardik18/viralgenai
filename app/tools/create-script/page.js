"use client"; // Ensure this runs on the client side

import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAIResponse = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/generateScript", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response.candidates[0].content.parts[0].text || "No response from AI");
    } catch (error) {
      setResponse("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="p-4">
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your prompt..." 
        className="border p-2 w-full rounded mb-2"
      />
      <button 
        onClick={generateAIResponse} 
        disabled={loading} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate AI Response"}
      </button>
      {response && (
        <div className="mt-4 p-4 border rounded bg-slate-800">
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      )}
    </div>
    </div>
  );
}
