export const ScrollTo = (position) => {
  if (position === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (position === "bottom") {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
};
