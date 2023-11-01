// Import the GSAP library
import { gsap } from "gsap";

// Define an animation
const animation = gsap.to(".animate-me", {
  x: 100, // Move 100 pixels to the right
  duration: 2, // Animation duration in seconds
  repeat: -1, // Repeat indefinitely
  yoyo: true, // Reverse animation on each repeat
});

// Add a class to the HTML element you want to animate
document.querySelector(".animate-me").classList.add("animated");
