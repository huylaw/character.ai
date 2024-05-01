import Banner from "@/components/Banner";
import BaseBlock from "@/components/BaseBlock";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between px-4 sm:px-8 pt-6">
      <div className="max-w-7xl self-center w-full">
        <div className="flex justify-end items-end pr-4 w-full">
          <div>
            <div className="relative h-10 w-64 md:w-96">
              <div className="absolute z-40 flex gap-2 w-full max-w-3xl border-spacing-1 border-divider flex-row self-center items-center rounded-full bg-surface-elevation-1 p-4 placeholder:text-placeholder">
                <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 hover:bg-surface-elevation-1 text-small gap-unit-2 rounded-md px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-ghost text-primary data-[hover=true]:opacity-hover h-fit min-w-fit w-fit">
                  <Search height={16} color="#fafafa"/>
                </button>
                <div className="relative flex flex-col w-full">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Search for Characters"
                    className="flex w-full border rounded-spacing-s text-md file:border-0 file:bg-transparent file:text-md file:font-medium outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none border-input rounded-full rounded-l-none border-none bg-transparent placeholder:text-muted-foreground p-0 relative"
                  />
                  <span className="flex flex-row px-3 gap-2 text-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="flex flex-col pt-6">
          <div className="pl-2 md:pl-0">
            <Banner />
            <li className="mb-6">
              <BaseBlock title={"For you"}>test</BaseBlock>
            </li>
          </div>
        </ol>
      </div>
      <div className="mt-24 py-10"></div>
    </div>
  )
};

export default Home;