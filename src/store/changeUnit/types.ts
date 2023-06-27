export type TInitialState = {
  unit: unitPayload | null;
  loader:boolean;
};

export type unitPayload = {
  title:string;
  vocabulary:{
      text:string
      links:{
          title: string;
          link: string;
      }[]
      file:string
  }
  grammar:{
      text:string[]
      image:string
  }
  pronunciation:{
      video:string
      audio:string
      text:string
  }
  speaking:{
      image:string
      text:string
  }
  revision:{
      icon:string;
      title:string
      link:string
  }[]
}

export type unitSend = {
  id:string;
  title: string;
  vocabularyText: string;
  vocabularyLinks: { title: string; link: string }[];
  vocabularyFile: string;
  grammarText: string[];
  grammarImage: string;
  pronunciationText: string;
  pronunciationVideo: string;
  pronunciationAudio: string;
  speakingText: string;
  speakingImage: string;
  revisionLinks: { icon: string; title: string; link: string }[];
}

export type getSendIdUnitResponse = {
  id: string;
};