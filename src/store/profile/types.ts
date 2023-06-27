export type TInitialState = {
  profile: getProfileResponse | null;
};

export type getProfileResponse = {
  image: string;
  userName: string;
  email: string;
  gender: "W" | "M";
  group: "none" | "310" | "311" | "410" | "411";
};

export type sendTokenRequest = {
  accesToken: string;
};

export type sendGroupResponse = {
  group: string;
};
