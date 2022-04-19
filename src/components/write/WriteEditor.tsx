import React, { useEffect, useImperativeHandle, useRef } from "react";
import styled, { css } from "styled-components";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import { media } from "@/libs/styles";
const StyledWriteEidtor = styled.div<{ mode: string }>`
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
  ${(props) =>
    props.mode === "WRITER"
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  .cm-gutters {
    display: none;
  }
  .ͼ1.cm-editor.cm-focused {
    outline: none;
  }
  .cm-content {
    white-space: normal;
    word-wrap: break-word;
    width: -webkit-fill-available;
  }
`;
const WriteEditor = React.forwardRef(
  (
    { initialValue = "", editorViewRef: editorViewProps, onChange, mode }: any,
    ref
  ) => {
    const editorViewRefInternal = useRef<any>();
    const containerRef = useRef<any>();

    const editorViewRef = editorViewProps || editorViewRefInternal;

    useImperativeHandle(ref, () => ({
      getValue: () => editorViewRef.current.state.doc.toString(),
    }));

    useEffect(() => {
      const updateListener = EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          if (typeof onChange === "function") {
            onChange();
          }
        }
      });

      if (containerRef.current) {
        if (!editorViewRef.current) {
          const extensions = [basicSetup, markdown(), updateListener];
          editorViewRef.current = new EditorView({
            state: EditorState.create({
              doc: initialValue,
              extensions,
            }),
            parent: containerRef.current,
          });
        }
      }
    }, [containerRef, initialValue, editorViewRef, onChange]);

    return (
      <StyledWriteEidtor mode={mode}>
        <div ref={containerRef} />
      </StyledWriteEidtor>
    );
  }
);
// interface WriteEditorProps {
//   mode: string;
//   editorRef: React.MutableRefObject<any>;
//   text: string;
// }

// const WriteEditor: React.FC<WriteEditorProps> = ({ mode, editorRef, text }) => {
//   const editorViewRefInternal = useRef();
//   const containerRef = useRef();

//   useEffect(() => {

//     return ()=>{

//     }
//   }, []);

//   return (
//     <StyledWriteEidtor mode={mode}>
//       <div ref={editorRef} />
//     </StyledWriteEidtor>
//   );
// };
export default WriteEditor;
