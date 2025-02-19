import React from 'react'
import Card from './_components/card'

function Tools() {
  return (    
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="AI UGC" description="this is the description" />
        <Card title="Voice Cloning" description="this is the description" />
        <Card title="AI Script Maker" description="this is the description" />
        <Card title="Chat Screen IMessage" description="this is the description" />
        <Card title="Reddit Stories" description="this is the description" />
        <Card title="Video Subtitling" description="this is the description" />
        <Card title="TTS" description="this is the description" />
        <Card title="Text to Image" description="this is the description" />
      </div>
    </div>
  )
}

export default Tools