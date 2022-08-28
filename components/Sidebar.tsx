import {
  HomeIcon,
  HeartIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  RssIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import IconButton from "./IconButton";

const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />;

const Sidebar = () => {
  const { data: session } = useSession();

  // console.log("🚀 ~ file: Sidebar.tsx ~ line 16 ~ Sidebar ~ session", session);

  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden overflow-hidden md:block">
      <div className="space-y-4">
        {session?.user && (
          <button
            onClick={() => {
              signOut();
            }}
          >
            {session.user.name} - Log Out 1.13.35
          </button>
        )}

        <IconButton icon={HomeIcon} label="Home"></IconButton>
        <IconButton icon={ServerStackIcon} label="Search"></IconButton>
        <IconButton
          icon={BuildingLibraryIcon}
          label="Your Library"
        ></IconButton>

        <Divider />

        <IconButton icon={PlusCircleIcon} label="Create Playlist"></IconButton>
        <IconButton icon={HeartIcon} label="Likes Songs"></IconButton>
        <IconButton icon={RssIcon} label="Your episodes"></IconButton>

        <Divider />

        {/* playlist */}
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        <p className="cursor-pointer hover:text-white">PLAYLIST</p>
      </div>
    </div>
  );
};

export default Sidebar;
