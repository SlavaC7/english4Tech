import plus from "../../../icon/plus.svg";
import minus from "../../../icon/minus.svg";
import ImageUploading from "react-images-uploading";
import appLoad from "../../../icon/appLoad.svg";
import trush from "../../../icon/delete.svg";
import { Box, TextField } from "@mui/material";

const Revision: React.FC<{
  changeCountLinkRevision: boolean;
  massLinkRivision: { icon: string; title: string; link: string }[];
  onAddLinkevision: () => void;
  onDeleteLinkevision: () => void;
  onSetType: (even: string, index: number) => void;
  onSetTitleLinkRevision: (even: string, index: number) => void;
  onSetLinkRevision: (even: string, index: number) => void;
}> = ({
  massLinkRivision,
  changeCountLinkRevision,
  onAddLinkevision,
  onDeleteLinkevision,
  onSetType,
  onSetTitleLinkRevision,
  onSetLinkRevision,
}) => {
  return (
    <div className="changeBlock">
      <h2>Revision</h2>

      <div className="group">
        <h4>Add link</h4>
        <div className="contolLink">
          <div className="blockControl" onClick={() => onAddLinkevision()}>
            <img src={plus} className="controleIcon" />
          </div>

          <div>{changeCountLinkRevision ? "+1" : "-1"}</div>

          <div className="blockControl" onClick={() => onDeleteLinkevision()}>
            <img src={minus} className="controleIcon" />
          </div>
        </div>
        <div className="blockLinkRevision">
          {massLinkRivision.map((text, index) => {
            return (
              <div className="linkElemGroup">
                <div className="linkElemBlock">
                  <img
                    src={massLinkRivision[index].icon}
                    width={40}
                    height={40}
                  />
                </div>

                <Box
                  style={{margin:15}}
                >
                  <TextField 
                  label={"Title "+index+1} 
                  variant="standard"
                  type={"text"}
                  value={massLinkRivision[index].title}
                  onChange={(even) =>
                    onSetTitleLinkRevision(even.target.value, index)
                  }
                  />
                </Box>

                <Box
                  style={{margin:15}}
                >
                  <TextField 
                  label={"Link "+index+1} 
                  variant="standard"
                  type={"text"}
                  value={massLinkRivision[index].link}
                  onChange={(even) =>
                    onSetLinkRevision(even.target.value, index)
                  }
                  />
                </Box>
              </div>
            );
          })}
          <div className="linkOptions"></div>
        </div>
      </div>
    </div>
  );
};
export default Revision;
