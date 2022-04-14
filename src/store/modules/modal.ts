import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilTransaction_UNSTABLE,
} from "recoil";
import { layerAtom, authAtom } from "..";

const stateBaseLayer = () => useRecoilValue(layerAtom);

const openAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(authAtom, { views: true, mode: "LOGIN" });
    set(layerAtom, { layer: true });
  });
const closeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(authAtom, { views: false, mode: "LOGIN" });
    set(layerAtom, { layer: false });
  });
const modeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
    const nextMode = get(authAtom).mode === "LOGIN" ? "REGISTER" : "LOGIN";
    set(authAtom, { views: true, mode: nextMode });
  });
const stateAuthModal = () => useRecoilValue(authAtom);

export {
  stateBaseLayer,
  openAuthModal,
  closeAuthModal,
  modeAuthModal,
  stateAuthModal,
};
