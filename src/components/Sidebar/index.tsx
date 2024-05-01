import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronsLeft } from "lucide-react";

const SideBar = () => {
   return (
      <div className="h-[100dvh] overflow-hidden">
         <div className="w-full h-full flex mr-7">
            <div className="overflow-hidden transition-all ease-out duration-300 max-w-64 translate-x-0">
               <div className="h-full border-r border-r-border-divider w-64">
                  <div className="flex h-full flex-col overflow-hidden bg-[#131316] border-r-border-divider w-full">
                     <div className="pl-6 pt-6 grid grid-cols-2 w-full items-center">
                        <Link href={"/"} className="text-2xl font-sans font-semibold flex items-center">
                           character.ai
                        </Link>
                        <Button variant="ghost" size="icon" className="rounded-[50%]">
                           <ChevronsLeft width={16} height={16}/>
                        </Button>
                     </div>
                     <div className="flex grow flex-col overflow-hidden mt-4">
                        <div className="w-full px-4">

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default SideBar;