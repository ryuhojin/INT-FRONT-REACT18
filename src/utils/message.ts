import { useRecoilState } from "recoil";
import { alertAtom } from "@/store/common";

export const useAlert = () => {
  const [message, setMessage] = useRecoilState(alertAtom);
  function show(msg: string, type = "alert") {
    setMessage({ title: "알림", message: msg, isShow: true });
  }
  function close() {
    setMessage({ title: "알림", message: "", isShow: false });
  }
  return { show, close };
};
