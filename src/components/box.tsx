import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Box = ({ children }: Props) => {
  return (
    <>
      <div className="box">{children}</div>
    </>
  );
};

export default Box;
