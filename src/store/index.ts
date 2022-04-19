import { atom } from "recoil";

//백레이어(검은 반투명 화면)
const layerAtom = atom({
  key: "layerAtom",
  default: {
    layer: false,
  },
});

//로그인 모달(팝업 화면)
const authAtom = atom({
  key: "authAtom",
  default: {
    views: false,
    mode: "LOGIN",
  },
});

//검색(리스트 화면)
const searchAtom = atom({
  key: "searchAtom",
  default: "",
});

//검색(리스트 상태 - 리액트 쿼리 재조회 때문에 있음 화면)
const listStatusAtom = atom({
  key: "listStatusAtom",
  default: false,
});

export { layerAtom, authAtom, searchAtom };
