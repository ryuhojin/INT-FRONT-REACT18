import { atom } from "recoil";

const layerAtom = atom({
  key: "layerAtom",
  default: {
    layer: false,
  },
});

const authAtom = atom({
  key: "authAtom",
  default: {
    views: false,
    mode: "LOGIN",
  },
});

export { layerAtom, authAtom };
