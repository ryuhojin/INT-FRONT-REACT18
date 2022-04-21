import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/libs/store";
import useAuth from "@/libs/store/modules/auth";
const useUser = () => {
  const user = useRecoilValue(userAtom);
  const auth = useAuth();
  useEffect(() => {
    if (user === undefined) return;
    if (user !== null) return;
    auth.signre();
  }, [user]);
};
export default useUser;
