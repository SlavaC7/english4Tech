import plus from "../../../icon/plus.svg";
import minus from "../../../icon/minus.svg";
import ImageUploading from "react-images-uploading";
import appLoad from "../../../icon/appLoad.svg";
import trush from "../../../icon/delete.svg";
import { Button, TextareaAutosize } from "@mui/material";

const Gramar: React.FC<{
  changeCountGramarText: boolean;
  gramarTextMass: string[];
  gramarImg: never[];
  maxNumber: number;
  setDataUrl: (data: string) => void;
  onChange: (imageList: any, addUpdateIndex: any) => void;
  onAddGramarText: () => void;
  onDeleteGramarText: () => void;
  onSetGramarText: (even: string, index: number) => void;
  onDeleteGramarTextFix: (index: number) => void;
}> = ({
  changeCountGramarText,
  gramarTextMass,
  gramarImg,
  maxNumber,
  setDataUrl,
  onChange,
  onAddGramarText,
  onDeleteGramarText,
  onSetGramarText,
  onDeleteGramarTextFix,
}) => {
  return (
    <div className="changeBlock">
      <h2>Gramar</h2>

      <div className="group">
        <div className="group">
          <h4>Gramar</h4>
          <div className="contolLink">
            <div className="blockControl" onClick={() => onAddGramarText()}>
              <img src={plus} className="controleIcon" />
            </div>

            <div>{changeCountGramarText ? "+1" : "-1"}</div>

            <div className="blockControl" onClick={() => onDeleteGramarText()}>
              <img src={minus} className="controleIcon" />
            </div>
          </div>
          <div className="gramarPar">
            {gramarTextMass.map((text, index) => {
              return (
                <div className="blockArea">
                  <div className="areaBlock">
                    <label className="areaPar">Paragraph {index + 1}</label>

                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="text"
                        value={gramarTextMass[index]}
                        onChange={(even) =>
                          onSetGramarText(even.target.value, index)
                        }
                        key={index + "hjbu"}
                        style={{ width: "100%",minHeight:50}}
                      />
                  </div>
                  <div
                    className="blockControl"
                    onClick={() => onDeleteGramarTextFix(index)}
                  >
                    <img src={minus} className="controleIcon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4>Uppload photo</h4>
          <ImageUploading
            value={gramarImg}
            onChange={onChange}
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
                <Button variant="contained"
                  onClick={onImageUpload}
                  {...dragProps}
                  className="fileButton"
                >
                  upload
                </Button>
                &nbsp;
                <Button style={{margin:10}} variant="contained" onClick={onImageRemoveAll} className="fileButton">
                  Remove all images
                </Button>
                {/* <input
                type="number"
                value={sizeImage.width}
                onChange={() => onChangeSizeImageWigth}
                name="wefwef"
              />
              <input
                type="number"
                value={sizeImage.height}
                onChange={() => onChangeSizeImageHeihtg}
                name="ewfwefwe"
              /> */}
                {imageList.map((image, index) => (
                  <div key={index} className="gramarImageBlock">
                    {setDataUrl(image.data_url)}
                    <img src={image.data_url} alt="" width="500" />

                    <div className="imageIconBlock">
                      <button onClick={() => onImageUpdate(index)}>
                        <img src={appLoad} className="photoIcon" />
                      </button>
                      <button onClick={() => {onImageRemove(index);setDataUrl("") }}>
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
    </div>
  );
};
export default Gramar;
