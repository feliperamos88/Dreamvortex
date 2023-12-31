import { forwardRef } from 'react';

const Audio = forwardRef(({ src }, ref) => {
  return <audio src={src} ref={ref} loop></audio>;
});

const ButtonClick = forwardRef(({ src }, ref) => {
  return <audio src={src} ref={ref}></audio>;
});
export { Audio, ButtonClick };
