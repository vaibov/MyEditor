"use client";

import { useParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import CollaborativeEditor from "../../components/Editor";
import { useRouter } from "next/navigation";

export default function Workspace() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  if (!id) return null;

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0B0E14] overflow-hidden">
      {/* Top Navigation */}
      <nav className="h-12 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0B0E14]">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <span className="text-sm font-mono text-gray-300">
            macondo_project_v1.sh
          </span>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs px-4 py-1.5 rounded-md font-bold transition-all shadow-lg shadow-cyan-900/20">
          DEPLOY TO CLOUD
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar users={[]} />
        <CollaborativeEditor roomId={id as string} />
      </div>

      {/* Footer / Status Bar */}
      <footer className="h-6 bg-cyan-700 flex items-center px-4 justify-between text-[10px] text-white font-medium">
        <div className="flex gap-4">
          <span>Main*</span>
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
        </div>
        <div>Connected: Localhost:1234</div>
      </footer>
    </div>
  );
}
