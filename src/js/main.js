import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const loadingWrapper = document.querySelector(".delete-visual");

let hideTimeout = null;

if (loadingWrapper) loadingWrapper.style.transition = "opacity 0.8s ease";

const deleteMessage = document.querySelector(".text-delete-content");

if (deleteMessage) deleteMessage.style.transition = "opacity 0.8s ease";

function showLoading() {
  if (!loadingWrapper) return;
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  loadingWrapper.style.display = "";
  requestAnimationFrame(() => {
    loadingWrapper.style.opacity = "1";
    loadingWrapper.style.pointerEvents = "";
  });
}

function hideLoading() {
  if (!loadingWrapper) return;
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  loadingWrapper.style.opacity = "0";
  loadingWrapper.style.pointerEvents = "none";
  hideTimeout = setTimeout(() => {
    if (loadingWrapper && loadingWrapper.style.opacity === "0")
      loadingWrapper.style.display = "none";
  }, 500);
}

function showDeleteMessage() {
  if (!deleteMessage) return;
  deleteMessage.style.display = "";
  requestAnimationFrame(() => {
    deleteMessage.style.opacity = "1";
  });
}

function hideDeleteMessage() {
  if (!deleteMessage) return;
  deleteMessage.style.opacity = "0.001";
  setTimeout(() => {
    if (deleteMessage && deleteMessage.style.opacity === "0")
      deleteMessage.style.display = "none";
  }, 200);
}

hideLoading();
hideDeleteMessage();

gsap.fromTo(
  ".barre",
  { width: "0%" },
  {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#trigger2",
      start: "center center",
      end: "center top",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const percent = (self.progress * 100).toFixed(2);
        const el = document.querySelector(".pourcentage");
        if (el) el.textContent = `${percent}%`;

        if (self.progress > 0 && self.progress < 1) {
          showLoading();
        } else {
          hideLoading();
        }
      },
      onEnter: () => {
        showLoading();
        hideDeleteMessage();
      },
      onEnterBack: () => {
        showLoading();
        hideDeleteMessage();
      },
      onLeave: hideLoading,
      onLeaveBack: hideLoading,
    },
  }
);

ScrollTrigger.create({
  trigger: "#trigger2",
  start: "center bottom",
  end: "center top",
  onEnter: showDeleteMessage,
  onLeave: hideDeleteMessage,
  onEnterBack: showDeleteMessage,
  onLeaveBack: hideDeleteMessage,
});

gsap.to(".middle-img", {
  y: 100,
  duration: 3,
  scrollTrigger: {
    trigger: ".middle-img",
    scrub: true,
    start: "top center",
    end: "bottom top",
  },
});

gsap.to(".bubble-left", {
  y: -220,
  duration: 3,
  rotate: -15,
  scrollTrigger: {
    trigger: ".bubble-left",
    scrub: true,
    start: "center center",
    end: "bottom top",
  },
});

gsap.to(".bubble-right", {
  y: -220,
  duration: 3,
  rotate: 15,
  scrollTrigger: {
    trigger: ".bubble-right",
    scrub: true,
    start: "center center",
    end: "bottom top",
  },
});

gsap.to(".title", {
  y: -100,
  duration: 3,
  rotate: -3,
  scrollTrigger: {
    trigger: ".title",
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});

gsap.to(".bubble-middle", {
  y: -40,
  duration: 3,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bubble-middle",
    scrub: true,
    start: "top center",
    end: "top top",
  },
});

gsap.to(".img-middle", {
  y: 150,
  duration: 3,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img-middle",
    scrub: true,
    start: "center bottom",
    end: "bottom top",
  },
});

gsap.to(".bubble1", {
  y: -40,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble1",
    scrub: true,
    start: "bottom bottom",
    end: "top top",
  },
});

gsap.to(".img1", {
  y: -150,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img1",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".bubble2", {
  y: -150,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble2",
    scrub: true,
    start: "bottom bottom",
    end: "bottom center",
  },
});

gsap.to(".img2", {
  y: -200,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img2",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".bubble3", {
  y: 50,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble3",
    scrub: true,
    start: "bottom bottom",
    end: "bottom top",
  },
});

gsap.to(".img3", {
  y: -250,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img3",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".img4", {
  y: -170,
  duration: 3,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img4",
    scrub: true,
    start: "bottom bottom",
    end: "bottom center",
  },
});
gsap.to(".bubble4", {
  y: -50,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble4",
    scrub: true,
    start: "top bottom",
    end: "bottom top",
  },
});

gsap.to(".img5", {
  y: -140,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img5",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".img6", {
  y: -90,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img6",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});
gsap.to(".img7", {
  y: -150,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img7",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});
gsap.to(".bubble5", {
  y: -10,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble5",
    scrub: true,
    start: "top bottom",
    end: "bottom top",
  },
});
gsap.to(".img8", {
  y: -70,
  duration: 1,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".img8",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".bubble6", {
  y: -210,
  duration: 3,
  opacity: 1,
  rotate: 0,
  scrollTrigger: {
    trigger: ".bubble6",
    scrub: true,
    start: "top bottom",
    end: "bottom center",
  },
});

gsap.to(".bubble-alone-img", {
  y: -150,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bubble-alone-img",
    scrub: true,
    start: "bottom bottom",
    end: "center center",
  },
});

gsap.from(".book-img", {
  duration: 1,
  x: -800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".book-img",
    scrub: true,
    start: "top bottom",
    end: "center center",
  },
});
gsap.from(".book-name", {
  duration: 1,
  x: -800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".book-img",
    scrub: true,
    start: "top bottom",
    end: "center center",
  },
});
gsap.from(".book-text-content", {
  duration: 1,
  x: 800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".book-img",
    scrub: true,
    start: "top bottom",
    end: "center center",
  },
});
