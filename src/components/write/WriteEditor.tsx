import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
const StyledWriteEidtor = styled.div``;

const WriteEditor = () => {
  const editor = useRef();
  useEffect(() => {
    const state = EditorState.create({
      doc: "",
      extensions: [basicSetup, markdown()],
    });
    const view = new EditorView({ state, parent: editor.current });
    return () => {
      view.destroy();
    };
  }, []);
  return (
    <StyledWriteEidtor>
      <div ref={editor as unknown as React.LegacyRef<HTMLDivElement>} />
    </StyledWriteEidtor>
  );
};
export default WriteEditor;
