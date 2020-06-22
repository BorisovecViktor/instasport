import React, {useCallback} from 'react';

const BackToTop = () => {
  const backToTop = useCallback(
    () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []
  );
  
  return (
    <button
      type="button"
      aria-label="Back to top"
      className="back-top-button"
      onClick={backToTop}
    />
  );
}

export default BackToTop;
