
import Discussionposts from "@/components/Discussionposts";
import Marketstories from "@/components/Marketstories";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ToggleDiscussionMarket from "@/components/ToggleDiscussionMarket";


export default function Home() {
  
  return (
    <div className="flex flex-col">
      <div>
        <Navbar  className="lg:hidden"/>
      </div>
      <div className="flex">
        <Sidebar className='' />
        <div className="lg:hidden">
          <ToggleDiscussionMarket />
        </div>
        <div className="hidden lg:flex lg:gap-32 m-6">
          <div className="flex-[90%]">
            <Discussionposts/>
          </div>
          <div className="flex-[20%]">
            <Marketstories/>
          </div>
        </div>
      </div>
    </div>
  );
}
