import React from "react";
import { Header } from "../../components/structures";
import { LinkCard } from "../../components/atoms";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col justify-center items-center p-2">
        <h3 className="mt-16 mb-8">Explore Animations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
          <LinkCard href="/animation/flower-of-life" >Flower of Life</LinkCard>
					<LinkCard href="/animation/organise" >Organising Shapes</LinkCard>
					<LinkCard href="/animation/triangle-animation" >Triangle Animation</LinkCard>
          <LinkCard href="/animation/four-features" >Four Features</LinkCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
