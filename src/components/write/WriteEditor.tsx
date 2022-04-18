import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import { media } from "@/libs/styles";
const StyledWriteEidtor = styled.div`
  margin-top: 0.5rem;
  background: #fff;
  height: 300px;
  overflow: auto;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  ${media.small} {
    border: none;
    border-radius: 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  }
  .cm-gutters {
    display: none;
  }
  .cm-content {
    white-space: normal;
    word-wrap: break-word;
    width: -webkit-fill-available;
  }
`;

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
