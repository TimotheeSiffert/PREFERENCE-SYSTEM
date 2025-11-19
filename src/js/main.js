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
  // ensure layout applied before changing opacity
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
  // delay setting display none to avoid flashes while scrub animates opacity
  hideTimeout = setTimeout(() => {
    if (loadingWrapper && loadingWrapper.style.opacity === "0")
      loadingWrapper.style.display = "none";
  }, 500); // 0.5s delay
}

function showDeleteMessage() {
  if (!deleteMessage) return;
  deleteMessage.style.display = "";
  // ensure layout applied before changing opacity
  requestAnimationFrame(() => {
    deleteMessage.style.opacity = "1";
  });
}

function hideDeleteMessage() {
  if (!deleteMessage) return;
  deleteMessage.style.opacity = "0.001";
  // delay setting display none
  setTimeout(() => {
    if (deleteMessage && deleteMessage.style.opacity === "0")
      deleteMessage.style.display = "none";
  }, 200); // 0.2s delay
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

        // show while between start and end, hide at the very start or at the end
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

// start hidden before trigger

// Separate ScrollTrigger for .delete-message
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
  scrollTrigger: {
    trigger: ".title",
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});

gsap.to(".bubble-middle", {
  y: -20,
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
  scrollTrigger: {
    trigger: ".bubble1",
    scrub: true,
    start: "bottom bottom",
    end: "bottom center",
  },
});

gsap.to(".img1", {
  y: -150,
  duration: 1,
  opacity: 1,
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

gsap.to(".book-img", {
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".book-img",
    scrub: true,
    start: "center bottom",
    end: "center center",
  },
});
