import plus from "../../../icon/plus.svg";
import minus from "../../../icon/minus.svg";
import ImageUploading from "react-images-uploading";
import appLoad from "../../../icon/appLoad.svg";
import trush from "../../../icon/delete.svg";
import { Button, TextareaAutosize } from "@mui/material";

const SpeakingSoftskills: React.FC<{
  speakingText: string;
  speakingImg: never[];
  maxNumber: number;
  onSetPhotoSpeakingUrl: (imageList: any, addUpdateIndex: any) => void;
  setDataSpeakingPhotoUrl: (data: string) => void;
  onSetSpeakingText: (even: string) => void;
}> = ({
  speakingText,
  speakingImg,
  maxNumber,
  onSetSpeakingText,
  onSetPhotoSpeakingUrl,
  setDataSpeakingPhotoUrl,
}) => {
  return (
    <div className="changeBlock">
      <h2>Speaking &amp; Softskills</h2>

      <div className="areaBlock">
        <label className="areaPar">Text</label>

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="text"
        value={speakingText}
        onChange={(even) => onSetSpeakingText(even.target.value)}
        style={{ width: "100%",minHeight:50}}
      />
      </div>

      <div className="group">
        <h4>Uppload photo</h4>
        <ImageUploading
          value={speakingImg}
          onChange={onSetPhotoSpeakingUrl}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <Button style={{margin:10}} variant="contained"
                onClick={onImageUpload}
                {...dragProps}
                className="fileButton"
              >
                Upload 
              </Button>
              &nbsp;
              <Button style={{margin:10}} variant="contained" onClick={()=>onImageRemoveAll()} className="fileButton">
                Remove all images
              </Button>
              {imageList.map((image, index) => (
                <div key={index} className="gramarImageBlock">
                  {setDataSpeakingPhotoUrl(image.data_url)}
                  <img src={image.data_url} alt="" width="500" />

                  <div className="imageIconBlock">
                    <button onClick={() => onImageUpdate(index)}>
                      <img src={appLoad} className="photoIcon" />
                    </button>
                     <button onClick={() => {onImageRemove(index); setDataSpeakingPhotoUrl("")}}>
                      <img src={trush} className="photoIcon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};
export default SpeakingSoftskills;
