import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import { ImageSetProps } from "./types";

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImageSet: React.FC<ImageSetProps> = ({ srcSet, alt, ...otherProps }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current as unknown as HTMLImageElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      });
    }, observerOptions);
    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [srcSet]);

  return (
    <Wrapper ref={imgRef} {...otherProps}>
      {isLoaded ? (
        <StyledImage src={srcSet[0]} srcSet={`${srcSet[1]} 2x, ${srcSet[2]} 3x`} alt={alt} />
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

export default ImageSet;
