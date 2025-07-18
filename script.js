var crsr = document.querySelector("#cursor");
var crsr_blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr_blr.style.left = dets.x - 60 + "px";
  crsr_blr.style.top = dets.y - 60 + "px";
    
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3;
    crsr.style.border = "0.1px solid white"
    crsr.style.backgroundColor = "transparent"
  });

  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  });
  
  
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "50px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -20%",
        end: "top -60%",
        scrub: 2,
    }
});

gsap.from("#about-us img, #about-us-in", {
  y: 80,
  opacity: 0,
  duration: 2,
  scrollTrigger:{
    trigger: "#about-us",
    scroll: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card",{
  scale: 0.6,
  duration: 2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroll: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 30,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 85%",
    end: "top 80%",
    scrub: 2,
  },
});