import Editor, { OnMount } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import React, { useRef, useEffect } from "react";
import { useCollab } from "../hooks/useCollab";
import { motion } from "framer-motion";

interface EditorProps {
  roomId: string;
}

const CollaborativeEditor: React.FC<EditorProps> = ({ roomId }) => {
  const editorRef = useRef<any>(null);
  const { doc, provider, awareness } = useCollab(roomId);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    monaco.editor.defineTheme("monaco-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6272a4", fontStyle: "italic" },
        { token: "keyword", foreground: "ff79c6" },
        { token: "number", foreground: "bd93f9" },
      ],
      colors: {
        "editor.backrdound": "#0b0e14",
        "editorCursor.foreground": "#00e5ff",
        "editor.linehighlightBackground": "#161b22",
        "editor.selectionBackground": "#21262d",
      },
    });
    monaco.editor.setTheme("monaco-dark");

    if (provider) {
      const type = doc.getText("monaco");
      new MonacoBinding(type, editor.getModel()!, new Set([editor]), awareness);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 h-full boder-l boder-gray-800"
    >
      <Editor
        height="100%"
        defaultLanguage="javascript"
        onMount={handleEditorDidMount}
        options={{
          fontSize: 15,
          fontFamily: "'Fira Code', monospace",
          minimap: { enabled: false },
          bracketPairColorization: { enabled: true },
          cursorBlinking: "expand",
          smoothScrolling: true,
          contextmenu: true,
          padding: { top: 20 },
        }}
      />
    </motion.div>
  );
};

export default CollaborativeEditor;
