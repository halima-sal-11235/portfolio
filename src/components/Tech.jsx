import React, { useRef } from 'react';
import { BallView, BallCanvasGroup } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const refs = useRef(technologies.map(() => React.createRef()));

  return (
    <>
      {/* One shared WebGL canvas for all balls */}
      <BallCanvasGroup>
        {technologies.map((technology, i) => (
          <BallView
            key={technology.name}
            icon={technology.icon}
            trackRef={refs.current[i]}
          />
        ))}
      </BallCanvasGroup>

      {/* DOM grid — each div is the visual slot for one ball */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, i) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            ref={refs.current[i]}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');