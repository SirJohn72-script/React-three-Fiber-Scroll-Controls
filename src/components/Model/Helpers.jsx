import gsap from "gsap";

export class ScrollTimeline {
  timeline;

  constructor() {
    this.timeline = gsap.timeline();
  }

  getTimeline() {
    return this.timeline;
  }

  getDuration() {
    return this.timeline.duration();
  }

  addAnimation(objectToAnimate, properties, timelinePoint) {
    this.timeline.to(
      objectToAnimate,
      {
        ...properties,
      },
      timelinePoint
    );
  }
}
