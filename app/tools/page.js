import React from 'react'
import Card from './_components/Card'
import Navbar from '../components/Navbar'

function Tools() {
  return (    
  <div>    
    <Navbar/>
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="AI UGC" description="Generate user-generated content using AI for social media, blogs, and marketing." link='/create-video' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="Voice Cloning" description="Clone voices with AI for dubbing, narration, or personalized audio content." link='/create-voice' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="AI Script Maker" description="Create compelling scripts for videos, podcasts, and storytelling with AI." link='/create-script' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="Chat Screen iMessage" description="Simulate iMessage-style chat screens for videos and content creation." link='/create-chat-video' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="Reddit Stories" description="Convert Reddit threads into engaging video narratives with AI narration." link='/create-reddit-story' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="Video Subtitling" description="Auto-generate accurate subtitles for videos with AI-powered transcription." link='/create-subtitles' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="TTS" description="Transform text into realistic AI-generated speech for videos and accessibility." link='/create-tts' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
        <Card title="Text to Image" description="Generate high-quality images from text prompts using AI image models." link='/create-image' imageURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
      </div>
    </div>
    </div>
  )
}

export default Tools