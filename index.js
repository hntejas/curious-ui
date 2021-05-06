const modal = document.getElementById("modal");
const OPEN_MODAL_BTN = document.getElementById("open-modal");
const CLOSE_MODAL_BTN = document.getElementById("close-modal");
const MOBILE_NAV_ACTION_BTN = document.getElementById("mobile-nav-action");
const BTN_ASIDE_CLOSE = document.getElementById("btn-aside-close");
const ASIDE_NAV = document.getElementById("aside-nav");

let isAsideOpen = false;

OPEN_MODAL_BTN.addEventListener("click", () => {
  modal.classList.remove("hide");
});

CLOSE_MODAL_BTN.addEventListener("click", () => {
  modal.classList.add("hide");
});

MOBILE_NAV_ACTION_BTN.addEventListener("click", () => {
  isAsideOpen = true;
  ASIDE_NAV.style.display = "flex";
  MOBILE_NAV_ACTION_BTN.style.display = "none";
});

ASIDE_NAV.addEventListener("click", (e) => {
  if (isAsideOpen && e.target.tagName === "A") {
    MOBILE_NAV_ACTION_BTN.style.display = "initial";
    ASIDE_NAV.style.display = "none";
    isAsideOpen = false;
  }
});

BTN_ASIDE_CLOSE.addEventListener("click", (e) => {
  if (isAsideOpen) {
    MOBILE_NAV_ACTION_BTN.style.display = "initial";
    ASIDE_NAV.style.display = "none";
    isAsideOpen = false;
  }
});
