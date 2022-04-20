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

//로그인 폼 정보(팝업 화면)
const formAtom = atom({
  key: "formAtom",
  default: {
    email: "",
    password: "",
    name: "",
    message: "",
    emailCert: "",
    isSendCert: false,
    isCert: false,
  },
});

//로그인 후 회원정보(user)
const userAtom = atom({
  key: "userAtom",
  default: null,
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

export { layerAtom, authAtom, userAtom, formAtom, searchAtom, listStatusAtom };
