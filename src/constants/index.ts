const debug = window.location.host!="e4t.sytes.net";
export const protocolHTTP: string = debug ? "http://" : "http://";
export const host: string = debug
  ? "93.79.41.156"
  : "e4t.sytes.net";

export const default_api = {
  api: `${protocolHTTP}${host}${debug ? ":3000" : "/server"}`,
};
