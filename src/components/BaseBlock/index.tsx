import { ReactNode } from "react";

const BaseBlock = ({
   title, children
}: {
   title: string;
   children: ReactNode;
}) => {
   return (
      <div className="w-full h-full">
         <div className="mb-4 ml-4">
            <p className="text-lg-medium">{title}</p>
            <div></div>
         </div>
         <div>{children}</div>
      </div>
   );
};

export default BaseBlock;