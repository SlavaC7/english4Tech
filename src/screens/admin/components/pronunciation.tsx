import { useFilePicker } from "use-file-picker";
import close from "../../../icon/close.svg";
import { FileContent } from "use-file-picker/dist/interfaces";

import video from "../../../icon/video.svg";
import audio from "../../../icon/audio.svg";
import { Button, TextareaAutosize } from "@mui/material";

const Pronunciation: React.FC<{
  pronunciationText: string;
  fileVideo: FileContent[];
  filesAudio: FileContent[];
  onSetPronunciationText: (even: string) => void;
  openFileVideo: () => void;
  clearVideo: () => void;
  openFileAudio: () => void;
  clearAudio: () => void;
  setDataPronunciationVideo: (data: string) => void;
  setDataPronunciationAudio: (data: string) => void;
}> = ({
  pronunciationText,
  fileVideo,
  filesAudio,
  onSetPronunciationText,
  openFileVideo,
  clearVideo,
  openFileAudio,
  clearAudio,
  setDataPronunciationVideo,
  setDataPronunciationAudio,
}) => {
  return (
    <div className="changeBlock">
      <h2>Pronunciation</h2>

      <div className="areaBlock">
        <label className="areaPar">Text</label>

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="text"
        value={pronunciationText}
        onChange={(even) => onSetPronunciationText(even.target.value)}
        style={{ width: "100%",minHeight:50}}
      />
      </div>

      <div className="group">
        <h4>Uppload video</h4>
        <Button style={{margin:10}} variant="contained" onClick={() => openFileVideo()} className="fileButton">
          Select files
        </Button>

        {fileVideo.map((file, index) => (
          <div className="fileBlock">
            {setDataPronunciationVideo(file.content)}
            <div>
              <img src={video} className="fileIcon" />
            </div>
            <div className="fileBlockInc">
              <h3>{file.name}</h3>
            </div>
            <div onClick={() => {clearVideo(); setDataPronunciationVideo("")}}>
              <img src={close} className="closeIcon" />
            </div>
          </div>
        ))}
      </div>

      <div className="group">
        <h4>Uppload audio</h4>
        <Button style={{margin:10}} variant="contained" onClick={() => openFileAudio()} className="fileButton">
          Select files
        </Button>

        {filesAudio.map((file, index) => (
          <div className="fileBlock">
            {setDataPronunciationAudio(file.content)}
            <div>
              <img src={audio} className="fileIcon" />
            </div>
            <div className="fileBlockInc">
              <h3>{file.name}</h3>
            </div>
            <div onClick={() => {clearAudio(); setDataPronunciationAudio("")}}>
              <img src={close} className="closeIcon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pronunciation;
