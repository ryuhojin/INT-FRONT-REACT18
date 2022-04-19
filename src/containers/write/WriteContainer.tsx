import WritePanel from "@/components/write/WritePanel";
import React, { useCallback, useState, useRef } from "react";

const WriteContainer = () => {
  const [mode, setMode] = useState("WRITER"); //에디터모드
  const [text, setText] = useState(""); //에디터내용

  const editorRef = useRef<any>();

  const onChangeMode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setMode("VIEWER") : setMode("WRITER");
  }, []);

  const onChangeText = useCallback(() => {
    setText(editorRef.current.getValue());
  }, []);

  return (
    <WritePanel
      text={text}
      mode={mode}
      editorRef={editorRef}
      onChangeMode={onChangeMode}
      onChangeText={onChangeText}
    />
  );
};
export default WriteContainer;
