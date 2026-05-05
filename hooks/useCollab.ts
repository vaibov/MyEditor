import { useEffect, useState, useCallback } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export const useCollab = (roomId: string) => {
  const [doc] = useState(() => new Y.Doc());
  const [provider, setProvider] = useState<WebsocketProvider | null>(null);
  const [awareness, setAwareness] = useState<any>(null);

  useEffect(() => {
    const p = new WebsocketProvider("ws://localhost:1234", roomId, doc);

    p.awareness.setLocalStateField("user", {
      name: "hacker_${Math.floor(Math.random() * 1000)}",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });

    setProvider(p);
    setAwareness(p.awareness);

    return () => {
      p.destroy();
      doc.destroy();
    };
  }, [roomId, doc]);
  return { doc, provider, awareness };
};
