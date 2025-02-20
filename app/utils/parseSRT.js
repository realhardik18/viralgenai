import subtitlesParser from "subtitles-parser-vtt";

export const parseSRT = async (srtFile) => {
  const srtText = await srtFile.text();
  const parsed = subtitlesParser.fromSrt(srtText);

  return parsed.map((cue) => ({
    startFrame: Math.round((cue.startTime / 1000) * 30), // Convert to frames (30 FPS)
    endFrame: Math.round((cue.endTime / 1000) * 30),
    text: cue.text,
  }));
};
