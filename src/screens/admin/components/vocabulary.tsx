import { useFilePicker } from "use-file-picker";
import wordFile from "../../../icon/wordFile.svg";
import close from "../../../icon/close.svg";
import plus from "../../../icon/plus.svg";
import minus from "../../../icon/minus.svg";
import { FileContent } from "use-file-picker/dist/interfaces";
import { Box, Button, TextareaAutosize, TextField } from "@mui/material";

const Vocabulary: React.FC<{
  vocabulary: string;
  changeCountLink: boolean;
  massLink: { title: string; link: string }[];
  filesContent: FileContent[];
  onSetVocabulary: (even: string) => void;
  onAddLink: () => void;
  openFileSelector: () => void;
  onDeleteLink: () => void;
  onSetMassLinkTitle: (even: string, index: number) => void;
  onSetMassLink: (even: string, index: number) => void;
  onSetVocabularyFile: (data: string) => void;
  clear: () => void;
}> = ({
  vocabulary,
  changeCountLink,
  massLink,
  filesContent,
  onSetVocabulary,
  onAddLink,
  openFileSelector,
  onDeleteLink,
  onSetMassLinkTitle,
  onSetMassLink,
  onSetVocabularyFile,
  clear,
}) => {
  return (
    <div className="changeBlock">
      <h2>Vocabulary</h2>

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="text"
        value={vocabulary}
        onChange={(even) => onSetVocabulary(even.target.value)}
        style={{ width: "100%",minHeight:50}}
      />

      <div className="group">
        <h3>Uppload file</h3>
        <Button style={{margin:10}} variant="contained" onClick={() => openFileSelector()} className="fileButton">
          Select files
        </Button>
        {filesContent.map((file, index) => (
          <div className="fileBlock">
            {onSetVocabularyFile(file.content)}
            <div>
              <img src={wordFile} className="fileIcon" />
            </div>
            <div className="fileBlockInc">
              <h3>{file.name}</h3>
            </div>
            <div onClick={() => clear()}>
              <img src={close} className="closeIcon" />
            </div>
          </div>
        ))}
      </div>

      <div className="group">
        <h4>Link</h4>
        <div className="contolLink">
          <div className="blockControl" onClick={() => onAddLink()}>
            <img src={plus} className="controleIcon" />
          </div>

          <div>{changeCountLink ? "+1" : "-1"}</div>

          <div className="blockControl" onClick={() => onDeleteLink()}>
            <img src={minus} className="controleIcon" />
          </div>
        </div>

        {massLink.map((text, index) => {
          return (
            <div className="blockLink">
              <Box
              style={{margin:15}}
            >
              <TextField 
              label={"Title "+index+1} 
              variant="standard"
              type={"text"}
              key={index + "hjbu"}
              value={massLink[index].title}
              onChange={(even) =>
                onSetMassLinkTitle(even.target.value, index)
              }
              />
            </Box>

              <Box
              style={{margin:15}}
            >
              <TextField 
              label={"Link "+index+1} 
              type={"text"}
              variant="standard"
              key={index + "hjbu"}
              value={massLink[index].link}
              onChange={(even) => onSetMassLink(even.target.value, index)}
              />
            </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vocabulary;
