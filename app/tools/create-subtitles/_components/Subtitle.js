import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const Subtitle = ({ subtitles }) => {
  const frame = useCurrentFrame();
  const activeSubtitle = subtitles.find((s) => frame >= s.startFrame && frame <= s.endFrame);

  if (!activeSubtitle) return null;

  const opacity = interpolate(frame, [activeSubtitle.startFrame, activeSubtitle.endFrame], [1, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 50 }}>
      <div style={{ fontSize: 40, color: "white", backgroundColor: "rgba(0,0,0,0.6)", padding: 10, borderRadius: 5, opacity }}>
        {activeSubtitle.text}
      </div>
    </AbsoluteFill>
  );
};

export default Subtitle;
