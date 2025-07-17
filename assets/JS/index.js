function updateDynamicMax() {
  document.querySelectorAll(".dynamic-max").forEach(ele => {
    if (window.innerWidth >= 992) {
      ele.style.maxWidth = ele.getAttribute("data-max-width");
    } else {
      ele.style.maxWidth = "100%";
    }
  });
}

updateDynamicMax();
window.addEventListener("resize", updateDynamicMax);