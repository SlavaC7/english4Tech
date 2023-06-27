import { FileContent } from "use-file-picker/dist/interfaces";
import wordFile from "../../../icon/wordFile.svg";

const ExampleChange: React.FC<{
  unit: string;
  vocabulary: string;
  filesContent: FileContent[];
  massLink: { title: string; link: string }[];
  gramarImg: never[];
  dataGramarPhotoUrl: string;
  gramarTextMass: string[];
  fileVideo: string;
  fileAudio: string;
  pronunciationText: string;
  speakingImg: never[];
  massLinkRivision: { icon: string; title: string; link: string }[];
  dataSpeakingPhotoUrl: string;
  speakingText: string;
}> = ({
  unit,
  vocabulary,
  filesContent,
  massLink,
  gramarImg,
  dataGramarPhotoUrl,
  gramarTextMass,
  fileVideo,
  fileAudio: filesAudio,
  pronunciationText,
  speakingImg,
  massLinkRivision,
  dataSpeakingPhotoUrl,
  speakingText,
}) => {
  return (
    <div className="exampleAdmin">
      <h1 className="exampleTitle">{unit}</h1>
      <div className="changeBlock">
        <h2>Vocabulary</h2>

        <p>{vocabulary}</p>

        {filesContent.map((file, index) => (
          <div className="fileBlock">
            <div>
              <img src={wordFile} className="fileIcon" />
            </div>
            <div className="fileBlockInc">
              <h3>{file.name}</h3>
            </div>
          </div>
        ))}

        {massLink.map((text, index) => {
          return (
            <div className="exampleLinkBlock">
              <a href={massLink[index].link} target="_blank">
                {massLink[index].title}
              </a>
            </div>
          );
        })}
      </div>

      <div className="changeBlock">
        <h2>Gramar</h2>
        <div>
          {dataGramarPhotoUrl == "" ? (
            <div className="exampleImageNull">
              <h2>
                Uppload Photo
              </h2>
            </div>
          ):(
          <img
            src={dataGramarPhotoUrl}
            alt=""
            width="300"
            className="exampleImage"
          />
          )
        }

          {gramarTextMass.map((image, index) => (
            <p className="exampleParagraf">{gramarTextMass[index]}</p>
          ))}
        </div>
      </div>

      <div className="changeBlock">
        <h2>Pronunciation</h2>

        <div>
          {fileVideo == "" ? (
            <div className="exampleVideoNull">
            <h2>
              Uppload video
            </h2>
          </div>
          ):(
            <div className="exampleFileFloat">
              <video controls src={fileVideo} width={500} height={200} />
            </div>
          ) 
            
          }
          <p className="exampleParagraf">{pronunciationText}</p>
        </div>
        {fileVideo == "" ? (
            <div className="fileBlock">
            <h2>
              Uppload audio
            </h2>
          </div>
          ):(
            <div className="fileBlock">
              <audio controls src={filesAudio} />
            </div>
          ) 
          }
      </div>

      <div className="changeBlock">
        <h2>Speaking &amp; Softskills</h2>
        <div>

        {dataSpeakingPhotoUrl == "" ? (
            <div className="exampleImageNull">
              <h2>
               Uppload Photo
              </h2>
            </div>
          ):(
            <img
              src={dataSpeakingPhotoUrl}
              alt=""
              width="300"
              className="exampleImage"
            />
          ) 
          }
          <p className="exampleParagraf">{speakingText}</p>
        </div>
      </div>

      <div className="changeBlock">
        <h2>Revision</h2>
        <div>
          {massLinkRivision.map((image, index) => (
            <div className="exampleLinkRevision">
              {!(massLinkRivision[index].link == "") && (
                <img
                  src={massLinkRivision[index].icon}
                  width={20}
                  height={20}
                />
              )}

              <a href={massLinkRivision[index].link} target="_blank">
                {massLinkRivision[index].title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExampleChange;
