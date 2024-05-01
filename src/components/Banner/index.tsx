const Banner = () => {
   return (
      <div className="rounded-lg gap-10 bg-background items-center justify-between hidden xl:flex my-6 relative pb-6"
         style={{ opacity: "1" }}
      >
         <div className="h-[300px] bg-contain overflow-hidden rounded-lg rounded-r-none absolute w-full z-0"
            style={{ minWidth: "400px", maxWidth: "800px" }}
         >

         </div>
         <div className="swiper swiper-initialized swiper-horizontal swiper-css-mode z-50"
            style={{marginRight: "4px"}}
         >
            <div className="swiper-wrapper"></div>
         </div>
      </div>
   )
};

export default Banner;