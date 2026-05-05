import {
  FolderIcon,
  FileCode,
  Users,
  Terminal as TermIcon,
} from "lucide-react";

const Sidebar = ({ users }: { users: any[] }) => {
  return (
    <div className="w-64 bg-[#0b0e14] border-r border-gray-800 flex flex-col h-full text-gray-400 select-none">
      <div className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">
        explorer
      </div>
      <div className="flex-1 px-2 space-y-1">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer transition-all text-gray-200">
          <FolderIcon size={16} className="test-blue-400" />
          <span>src</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer pl-6">
          <FileCode size={16} className="text-yellow-400" />
          <span>App.tsx</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded curor-pointer pl-6">
          <FileCode size={16} className="text-blue-400" />
          <span>index.css</span>
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-500 uppercase">
          <Users size={14} /> Collaborative
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          {users.map((u, i) => (
            <div
              key={i}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0b0e14]bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-[10px] text-white font-bold"
              title={u.name}
            >
              {u.name.substring(0, 2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
