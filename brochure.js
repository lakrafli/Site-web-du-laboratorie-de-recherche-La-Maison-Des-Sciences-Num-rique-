
let brochure = $(".b3");
let cover = $(".cover");
let page1 = $(".p1");
let page2 = $(".p2");
let page3 = $(".p3");
let page4 = $(".p4");


let riseTl = new TimelineMax()
  .to( brochure, { duration: 1, ease: "power2.inOut", y: -320, z: 60, rotateX: "-1deg" } )
  .to( brochure, { delay: .35, duration: 0.65, ease: "power2.inOut", x: 150 }, "-=1" )
  .reverse();

let openTl = new TimelineMax() 
  .to( cover, { delay: .2, duration: .8, ease: "power2.in", rotateY: "-160deg", x: 1 } )
  .to( page1, { delay: .2, duration: .8, ease: "power2.in", rotateY: "-30deg" }, 0 )
  .to( page2, { delay: .3, duration: .7, ease: "power2.in", rotateY: "-22deg" }, 0 )
  .to( page3, { delay: .4, duration: .6, ease: "power2.in", rotateY: "-15deg" }, 0 )
  .to( page4, { delay: .5, duration: .5, ease: "power2.in", rotateY: "-7deg" }, 0 )
  .reverse();

function riseAndOpen() {
  riseTl.reversed( !riseTl.reversed() );
  openTl.reversed( !openTl.reversed() );
}

function leapAndFall() { 
  let leapAndFallTl = new TimelineMax()
    .to( brochure, { duration: 1, ease: "power3.out", translateY: -320, translateZ: 70, rotateX: "-1deg", rotate: "5deg" }, 0)
    .to( brochure, { duration: 2, ease: "bounce.out", translateY: 27, translateZ: 60, rotateX: "16deg", rotate: "0deg" }, 1 )
    .to( $(".b2"), { duration: 1, ease: "power3.out", translateY: -325, translateZ: 60, rotateX: "-1deg", rotate: "-7deg" }, 0.3 )
    .to( $(".b2"), { duration: 2, ease: "bounce.out", translateY: 17, translateZ: 119, rotateX: "13deg", rotate: "0deg" }, 1.3 )
    .to( $(".b1"), { duration: 1, ease: "power3.out", translateY: -320, translateZ: 50, rotateX: "-1deg", rotate: "2deg" }, 0.6 )
    .to( $(".b1"), { duration: 2, ease: "bounce.out", translateY: 16, translateZ: 108, rotateX: "11deg", rotate: "0deg" }, 1.6 )
}

$(".stand").click( ()=> {
  riseAndOpen();
  //leapAndFall();
});

