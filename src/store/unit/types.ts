export type TInitialState = {
  unitList: oneUnitPayload[];
  unit: unitPayload | null;
  changeUnit: changeUnit | null;
  changeList: oneChangeUnitList[];
  changeUnitInfo: сhangeUnitInfo | null;
  deleteUnitResult: deleteUnitResponse | null;
  loader:boolean;
};

export type sendTokenRequest = {
  accesToken: string;
};

export type unitListPayload = oneUnitPayload[];

export type oneUnitPayload = {
  id: any;
  title: string;
  description: string;
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

export type SigninActionResponse = {
  access_token: string;
  id: string;
};

export type getSendIdUnitResponse = {
  id: string;
};

export type RegisterType = {
  login: string;
  password: string;
  userName: string;
};

export type RegisterActionResponse = {
  access_token: string;
  id: string;
  verification: "email" | "phone" | null;
};

export type addUnit = {
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
};

export type changeUnit = {
  id: string;
  title: string;
  vocabularyText: string;
  vocabularyLinks: { title: string; link: string }[];
  vocabularyFile: string;
  gramarText: string[];
  gramarImage: string;
  pronunciationText: string;
  pronunciationVideo: string;
  pronunciationAudio: string;
  speakingText: string;
  speakingImage: string;
  revisionLinks: { icon: string; title: string; link: string }[];
};

export type changeUnitList = oneChangeUnitList[];

export type oneChangeUnitList = {
  id: string;
  title: string;
  vocabularyText: string;
  speakingText: string;
  pronunciationText: string;
};
export type сhangeUnitInfo = {
  links: number;
  files: number;
  photo: number;
  video: number;
  audio: number;
};

export type deleteUnitResponse = {
  result: string;
};
