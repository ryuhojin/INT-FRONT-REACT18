import { atom } from "recoil";

const dialogAtom = atom({
  key: "dialog",
  default: {
    title: "알림",
    children: null,
    visible: false,
  },
});
const alertAtom = atom({
  key: "message",
  default: {
    title: "주의",
    message: "",
    isShow: false,
  },
});
export { dialogAtom, alertAtom };