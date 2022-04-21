import WritePanel from "@/components/write/WritePanel";
import { createIssue } from "@/libs/api/modules/issueApi";
import { listStatusAtom } from "@/libs/store";
import React, { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
const WriteContainer = () => {
  const [mode, setMode] = useState("WRITER"); //에디터모드
  const [title, setTitle] = useState("");
  const [text, setText] = useState(""); //에디터내용
  const setStatus = useSetRecoilState(listStatusAtom);

  const editorRef = useRef<any>();
  const navigate = useNavigate();
  const onChangeMode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setMode("VIEWER") : setMode("WRITER");
  }, []);
  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    []
  );
  const onChangeText = useCallback(() => {
    setText(editorRef.current.getValue());
  }, []);
  const onClickWrite = async () => {
    const response = await createIssue({
      title: title,
      content: text,
      docType: "TEXT",
      category: "",
      hashtags: [],
    });
    if (response.status !== 200) return;
    setStatus(true);
    navigate("/");
  };

  return (
    <WritePanel
      title={title}
      text={text}
      mode={mode}
      editorRef={editorRef}
      onChangeMode={onChangeMode}
      onChangeTitle={onChangeTitle}
      onChangeText={onChangeText}
      onClickWrite={onClickWrite}
    />
  );
};
export default WriteContainer;
