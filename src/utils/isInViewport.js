export const isInViewport = (elem) => {
  let bounding = elem.getBoundingClientRect();
  return bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
};
