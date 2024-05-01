const ItemBanner = ({
   url, title, content
}: {
   url: string;
   title: string;
   content: string;
}) => {
   return (
      <div className="swiper-slide swiper-slide-active px-2" style={{width: "auto"}}>
         <div style={{opacity: "1", transform: "none"}}>
            
         </div>
      </div>
   )
};

export default ItemBanner;