type DebounceFunction = (...args: any[]) => void;

function debounce<F extends DebounceFunction>(func: F, delay: number): F {
  let timerId: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<F>) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as F;
}

export default debounce