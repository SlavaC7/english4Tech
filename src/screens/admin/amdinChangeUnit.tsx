import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useFilePicker } from "use-file-picker";
import ImageUploading from "react-images-uploading";

import wordFile from "../../icon/wordFile.svg";
import appLoad from "../../icon/appLoad.svg";
import trush from "../../icon/delete.svg";
import plus from "../../icon/plus.svg"; 
import minus from "../../icon/minus.svg";
import close from "../../icon/close.svg";
import video from "../../icon/video.svg";
import audio from "../../icon/audio.svg";

import TitleUnit from "./components/title";
import Vocabulary from "./components/vocabulary";
import Gramar from "./components/gramar";
import Pronunciation from "./components/pronunciation";
import SpeakingSoftskills from "./components/speakingSoftskill";
import { type } from "os";
import Revision from "./components/revision";
import Example from "./components/example";
import { addUnitAction } from "../../store/unit";
import NavigationAdmin from "./navigationAdmin";
import { useTypedSelector } from "../../store/store";
import Loader from "../preloader/preloader";
import { getChangeUnitAction, sendChangeUnitAction } from "../../store/changeUnit";
import ExampleChange from "./components/exampleChange";

function AdminChangeUnit() {

  // @ts-ignore
  const { id } = useParams();

  const dispatch = useDispatch();

  const unitChange = useTypedSelector( (s) => s.changeUnit.unit);

  const visibleLoader = useTypedSelector( (s) => s.changeUnit.loader);

  useEffect(()=>{
    dispatch(getChangeUnitAction.request({ id:id!! }));
  }, [])

  useEffect(()=>{
    setUnitTitle(unitChange?.title!);

    setVocabulary(unitChange?.vocabulary.text!);

    setGramarTextMass(JSON.parse(JSON.stringify(unitChange?.grammar.text!)));

    setPronunciationText(unitChange?.pronunciation.text!);

    setSpeakingText(unitChange?.speaking.text!);

    setCountGramartext(unitChange?.grammar.text.length!);

    setCountlink(unitChange?.vocabulary.links.length!);

    setMassLink(JSON.parse(JSON.stringify(unitChange?.vocabulary.links!)));

    setGramarImgUrl(unitChange?.grammar.image!);

    setDataSpeakingImg(unitChange?.speaking.image!);

    setDataVocabularyFile(unitChange?.vocabulary.file!);

    setDataPronunciationVideo(unitChange?.pronunciation.video!);

    setDataPronunciationAudio(unitChange?.pronunciation.audio!);

    setCountlinkRevision(unitChange?.revision.length!);

    setMassLinkRivision(JSON.parse(JSON.stringify(unitChange?.revision!)));
    
  }, [unitChange])

  const [unitTitle, setUnitTitle] = useState("Your title unit");

  const [vocabulary, setVocabulary] = useState("Simple text");

  const [gramarTextMass, setGramarTextMass] = useState(["Simple text"]);

  const [pronunciationText, setPronunciationText] = useState("Simple text");

  const [speakingText, setSpeakingText] = useState("Simple text");

  const [countGramarText, setCountGramartext] = useState(1);

  const [changeCountGramarText, setChangeCountGramarText] = useState(true);

  const [massLink, setMassLink] = useState([
    {
      title: "",
      link: "",
    },
  ]);

  const [countLink, setCountlink] = useState(1);

  const [gramarImg, setGramarImg] = useState([]);

  const [speakingImg, setSpeakingImg] = useState([]);

  const [dataGramarImgUrl, setGramarImgUrl] = useState("");

  const [dataSpeakingImg, setDataSpeakingImg] = useState("");

  const [dataVocabularyFile, setDataVocabularyFile] = useState("");

  const [dataPronunciationVideo, setDataPronunciationVideo] = useState("");

  const [dataPronunciationAudio, setDataPronunciationAudio] = useState("");

  const [sizeImage, setSizeImage] = useState({
    width: 150,
    height: 0,
  });

  const maxNumber = 69;

  const [changeCountLink, setChangeCountLink] = useState(true);

  const [countLinkRevision, setCountlinkRevision] = useState(1);

  const [changeCountLinkRevision, setChangeCountLinkRevision] = useState(true);

  const [massLinkRivision, setMassLinkRivision] = useState([
    {
      icon: "",
      title: "",
      link: "",
    },
  ]);



  const onSetUnit = (even: string) => {
    setUnitTitle(even);
  };

  const onSetVocabulary = (even: string) => {
    setVocabulary(even);
  };

  const onSetPronunciationText = (even: string) => {
    setPronunciationText(even);
  };

  const onSetSpeakingText = (even: string) => {
    setSpeakingText(even);
  };

  const onChangeSizeImageWigth = (even: number) => {
    setSizeImage((prev) => ({ ...prev, width: even }));
  };

  const onChangeSizeImageHeihtg = (even: number) => {
    setSizeImage((prev) => ({ ...prev, height: even }));
  };

  const onSetMassLink = (even: string, index: number) => {
    let mass = massLink;

    mass[index].link = even;

    setMassLink([...mass]);
  };

  const onSetMassLinkTitle = (even: string, index: number) => {
    let mass = massLink;

    mass[index].title = even;

    setMassLink([...mass]);
  };

  const onSetGramarText = (even: string, index: number) => {
    let mass = gramarTextMass;

    mass[index] = even;

    setGramarTextMass([...mass]);
  };

  const onAddGramarText = () => {
    setCountGramartext(countGramarText + 1);

    setGramarTextMass([...gramarTextMass, "Simple text"]);

    setChangeCountGramarText(true);
  };

  const onDeleteGramarText = () => {
    let mass = gramarTextMass;

    mass.splice(countGramarText, 1);

    setGramarTextMass(mass);

    setCountGramartext(countGramarText - 1);

    setChangeCountGramarText(false);
  };

  const onDeleteGramarTextFix = (index: number) => {
    let mass = gramarTextMass;

    mass.splice(index, 1);

    setGramarTextMass(mass);

    setCountGramartext(countGramarText - 1);

    setChangeCountGramarText(false);
  };

  const onAddLink = () => {
    setCountlink(countLink + 1);

    setMassLink([...massLink, { title: "", link: "" }]);

    setChangeCountLink(true);
  };

  const onDeleteLink = () => {
    let mass = massLink;

    mass.splice(countLink, 1);

    setMassLink(mass);

    setCountlink(countLink - 1);

    setChangeCountLink(false);
  };

  const [openFileSelector, { filesContent, loading, plainFiles, clear }] =
    useFilePicker({
      accept: [".doc", ".pptx", ".docx", ".ppt", ".pdf"],
      readAs: "DataURL",
    });

  const [
    openFileVideo,
    { filesContent: fileVideo, plainFiles: filesVideo, clear: clearVideo },
  ] = useFilePicker({
    accept: [".mp4", ".avi"],
    readAs: "DataURL",
  });

  const [
    openFileAudio,
    { filesContent: fileAudio, plainFiles: filesAudio, clear: clearAudio },
  ] = useFilePicker({
    accept: [".mp3"],
    readAs: "DataURL",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSetPhotoGramarUrl = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setGramarImg(imageList);
  };

  const onSetPhotoSpeakingUrl = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setSpeakingImg(imageList);
  };

  // Revesion link logic -----------------------------------------------------------------------

  const find = (link: string) => {
    let i: keyof typeof linkLogo;
    for (i in linkLogo) if (link.includes(i.toLowerCase())) return linkLogo[i];
    return "http://s1.iconbird.com/ico/2013/8/429/w512h5121377939826185087linkstreamline.png";
  };

  const onSetType = (even: any, index: number) => {
    let mass = massLinkRivision;

    mass[index].icon = getLinkLogo(even);

    setMassLinkRivision([...mass]);
  };

  const onSetTitleLinkRevision = (even: string, index: number) => {
    let mass = massLinkRivision;

    mass[index].title = even;

    setMassLinkRivision([...mass]);
  };

  const onSetLinkRevision = (even: string, index: number) => {
    let mass = massLinkRivision;

    mass[index].link = even;

    mass[index].icon = find(even);

    setMassLinkRivision([...mass]);
  };

  const onAddLinkevision = () => {
    setCountlinkRevision(countLinkRevision + 1);

    setMassLinkRivision([
      ...massLinkRivision,
      { icon: "", title: "", link: "" },
    ]);

    setChangeCountLinkRevision(true);
  };

  const onDeleteLinkevision = () => {
    let mass = massLinkRivision;

    mass.splice(countLinkRevision, 1);

    setMassLinkRivision(mass);

    setCountlinkRevision(countLinkRevision - 1);

    setChangeCountLinkRevision(false);
  };

  const linkLogo = {
    Link: "",
    Wordwall:
      "https://az779572.vo.msecnd.net/res/content/images/favicon.ico%7C1evmh0qrg1aqcgft8tddfea2.ico",
    Quizlet:
      "https://assets.quizlet.com/a/j/dist/app/i/logo/2021/q-twilight.389092a385cb51d.png",
    Classtime: "https://static.classtime.com/www/images/classtime-monogram.svg",
  };

  const getLinkLogo = (status: keyof typeof linkLogo) => linkLogo[status];

  const onSendUnit = () => {
    dispatch(
      sendChangeUnitAction.request({
        id:id!,
        title: unitTitle,
        vocabularyText: vocabulary,
        vocabularyLinks: massLink,
        vocabularyFile: dataVocabularyFile,
        grammarText: gramarTextMass,
        grammarImage: dataGramarImgUrl,
        pronunciationText: pronunciationText,
        pronunciationVideo: dataPronunciationVideo,
        pronunciationAudio: dataPronunciationAudio,
        speakingText: speakingText,
        speakingImage: dataSpeakingImg,
        revisionLinks: massLinkRivision,
      })
    );
  };

  return (
    <div className="appAdmin">
      <Loader visible={visibleLoader} />
      <NavigationAdmin description="Add unit" />
      <div className="wrapperAdminAdd">
        <div className="header">Add Unit</div>
        <div className="contentAndminCh">
          <div className="optionsAdmin">
            <TitleUnit unit={unitTitle} onSetUnit={onSetUnit} />

            <Vocabulary
              vocabulary={vocabulary}
              changeCountLink={changeCountLink}
              massLink={massLink}
              onSetVocabulary={onSetVocabulary}
              filesContent={filesContent}
              openFileSelector={openFileSelector}
              onAddLink={onAddLink}
              onDeleteLink={onDeleteLink}
              onSetMassLinkTitle={onSetMassLinkTitle}
              onSetMassLink={onSetMassLink}
              onSetVocabularyFile={setDataVocabularyFile}
              clear={clear}
            />

            <Gramar
              changeCountGramarText={changeCountGramarText}
              gramarTextMass={gramarTextMass}
              gramarImg={gramarImg}
              maxNumber={maxNumber}
              setDataUrl={setGramarImgUrl}
              onChange={onSetPhotoGramarUrl}
              onAddGramarText={onAddGramarText}
              onDeleteGramarText={onDeleteGramarText}
              onSetGramarText={onSetGramarText}
              onDeleteGramarTextFix={onDeleteGramarTextFix}
            />

            <Pronunciation
              pronunciationText={pronunciationText}
              fileVideo={fileVideo}
              filesAudio={fileAudio}
              onSetPronunciationText={onSetPronunciationText}
              openFileVideo={openFileVideo}
              clearVideo={clearVideo}
              openFileAudio={openFileAudio}
              clearAudio={clearAudio}
              setDataPronunciationVideo={setDataPronunciationVideo}
              setDataPronunciationAudio={setDataPronunciationAudio}
            />

            <SpeakingSoftskills
              speakingText={speakingText}
              speakingImg={speakingImg}
              maxNumber={maxNumber}
              onSetSpeakingText={onSetSpeakingText}
              onSetPhotoSpeakingUrl={onSetPhotoSpeakingUrl}
              setDataSpeakingPhotoUrl={setDataSpeakingImg}
            />

            <Revision
              changeCountLinkRevision={changeCountLinkRevision}
              massLinkRivision={massLinkRivision}
              onAddLinkevision={onAddLinkevision}
              onDeleteLinkevision={onDeleteLinkevision}
              onSetType={onSetType}
              onSetTitleLinkRevision={onSetTitleLinkRevision}
              onSetLinkRevision={onSetLinkRevision}
            />
          </div>

          <ExampleChange
            unit={unitTitle}
            vocabulary={vocabulary}
            gramarImg={gramarImg}
            filesContent={filesContent}
            massLink={massLink}
            dataGramarPhotoUrl={dataGramarImgUrl}
            gramarTextMass={gramarTextMass}
            fileVideo={dataPronunciationVideo}
            fileAudio={dataPronunciationAudio}
            pronunciationText={pronunciationText}
            speakingImg={speakingImg}
            massLinkRivision={massLinkRivision}
            dataSpeakingPhotoUrl={dataSpeakingImg}
            speakingText={speakingText}
          />
        </div>
        <div className="sendButtonBlock">
          <button onClick={() => onSendUnit()} id="sendButton">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminChangeUnit;
