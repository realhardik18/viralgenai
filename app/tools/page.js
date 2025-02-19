import React from 'react'
import Card from './_components/Card'

function Tools() {
  return (    
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="AI UGC" description="Generate user-generated content using AI for social media, blogs, and marketing." link='/create-video'/>
        <Card title="Voice Cloning" description="Clone voices with AI for dubbing, narration, or personalized audio content." link='/create-voice'/>
        <Card title="AI Script Maker" description="Create compelling scripts for videos, podcasts, and storytelling with AI." link='/create-script'/>
        <Card title="Chat Screen iMessage" description="Simulate iMessage-style chat screens for videos and content creation." link='/create-chat-video'/>
        <Card title="Reddit Stories" description="Convert Reddit threads into engaging video narratives with AI narration." link='/create-reddit-story'/>
        <Card title="Video Subtitling" description="Auto-generate accurate subtitles for videos with AI-powered transcription." link='/create-subtitles'/>
        <Card title="TTS" description="Transform text into realistic AI-generated speech for videos and accessibility." link='/create-tts'/>
        <Card title="Text to Image" description="Generate high-quality images from text prompts using AI image models." link='/create-image'/>
      </div>
    </div>
  )
}

export default Tools