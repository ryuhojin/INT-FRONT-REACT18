import { atom } from "recoil";

const layerAtom = atom({
  key: "layer",
  default: {
    layer: false,
  },
});

const authAtom = atom({
  key: "auth",
  default: {
    views: false,
    mode: "LOGIN",
  },
});

export { layerAtom, authAtom };
