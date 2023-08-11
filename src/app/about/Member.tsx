import React from "react";
import variants from "../common/Animation";
import AnimateInView from "../common/AnimateInView";

type PropTypes = {
  name: string;
  positions?: string[];
  image?: string;
  tag?: string;
  className?: string;
};
const Member = ({ name, positions, image, tag }: PropTypes) => {
  return (
    <>
      <AnimateInView
        hoverScaleUp
        tag="div"
        variants={variants.fadeInDown}
        className="card h-full lg:w-[20rem] lg:h-[35rem] mx-5 my-10 bg-base-100 shadow-xl"
      >
        <figure className="h-96 lg:h-full relative">
          <div className="absolute top-5 right-3 z-30 badge text-primary h-10 w-40 text-lg font-semibold bg-white">
            {tag}
          </div>
          <img
            src={image ? image : "https://source.unsplash.com/random/1"}
            alt="Shoes"
            className="rounded-t-xl object-cover h-full w-full"
          />
        </figure>
        <div className="h-1/3 card-body mt-0">
          <h2 className="card-title font-sans text-2xl lg:my-2 text-primary">
            {name}
          </h2>
          <div className="lg:mb-3">
            {positions &&
              positions.map((position) => (
                <p
                  key={position}
                  className="text-secondary font-semibold text-xl"
                >
                  {position}
                </p>
              ))}
          </div>
        </div>
      </AnimateInView>
    </>
  );
};

export default Member;
