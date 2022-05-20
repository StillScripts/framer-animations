import React from "react";
import { Frame, Header } from "../../components/structures";

type AnimationProps = {
  children: JSX.Element
  text: string;
};

const Animation: React.FC<AnimationProps> = ({ text, children }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-full flex flex-col justify-center items-center p-2">
        <h3 className="mt-8 mb-6">{text}</h3>
        <Frame>{children}</Frame>
      </div>
    </div>
  );
};

export default Animation;
