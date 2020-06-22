import React, { useState, useRef, useEffect } from 'react';

type Props = {
  src: string;
  alt: string;
}

const registerObserver = (ref:any, setShowImage:any) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      observer.disconnect();
    });
  });
  observer.observe(ref)
}

const LazyImage: React.FC<Props> = ({ src, alt }) => {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    registerObserver(imageRef.current, setShowImage)
  }, [])

  if(showImage) {
    return <img className="product__image" src={src} alt={alt} />
  }
  
  return <span ref={imageRef} className="product__image" />
}

export default LazyImage;
