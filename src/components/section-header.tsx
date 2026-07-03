import type React from "react";
import type { FC } from "react";
import MotionWrapper from "./motion-wrapper";
import BlurText from "./BlurText";

type SectionHeaderProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  inViewport?: boolean;
  className?: string;
  animate?: boolean;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  description = "Section description goes here.",
  inViewport = true,
  className = "",
  animate = undefined,
}) => {
  return (
    <div className={className}>
      <MotionWrapper
        as="h2"
        initial={animate ? { y: 100, opacity: 0 } : {}}
        animate={animate && inViewport ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="dk-section-title"
      >
        {typeof title === 'string' ? (
          <BlurText 
            text={title} 
            delay={50} 
            animateBy="words" 
            direction="bottom" 
            className="flex justify-center" 
          />
        ) : (
          title
        )}
      </MotionWrapper>
      <MotionWrapper
        as="p"
        initial={animate ? { y: 100, opacity: 0 } : {}}
        animate={animate && inViewport ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="dk-section-description max-w-[730px] mx-auto"
      >
        {description}
      </MotionWrapper>
    </div>
  );
};

export default SectionHeader;
