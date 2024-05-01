import Link from "next/link"

const ItemBase = ({
   url, image, title, by, content, comment
}: {
   url: string;
   image: string;
   title: string;
   by: string;
   content: string;
   comment: string;
}) => {
   return (
      <Link href={url}>
         <div style={{ width: "312px" }}>
            <div className="w-full h-full p-4 flex flex-col gap-2">
               <div className="flex flex-row h-full space-x-3 w-full">
                  <span
                     className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0"
                     style={{ width: "90px", height: "114px", borderRadius: "14px" }}
                  >
                     <img 
                        className="object-cover object-center bg-card shrink-0 grow-0 h-full"
                        alt={title}
                        src={image}
                     />
                  </span>
                  <div className="overflow-auto h-full flex flex-col justify-between w-full">
                     <div>
                        <p className="mb-[2px] text-md-medium leading-tight line-clamp-1 text-ellipsis break-anywhere overflow-hidden whitespace-normal">
                           {title}
                        </p>
                        <div className="text-muted-foreground font-normal text-sm truncate mb-[5px]">{`By @${by}`}</div>
                        <p className="text-foreground font-normal line-clamp-3 text-sm text-ellipsis overflow-hidden whitespace-normal break-anywhere">{content}</p>
                     </div>
                     <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2">
                           <div className="flex flex-row gap-1 items-center">
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default ItemBase;