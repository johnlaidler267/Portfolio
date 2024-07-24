import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Registers the ScrollTrigger plugin from GSAP, which enables animations based on scrolling events.

// REVEAL //
// This comment indicates the start of a section of code responsible for revealing elements on the page.

export default function reveal() {
    gsap.utils.toArray(".revealUp").forEach(function (elem) {

        // Get all elements with the class "revealUp" and loop through them.

        ScrollTrigger.create({
            // Create a ScrollTrigger instance for each element.

            trigger: elem,
            // Set the trigger to be the current element, meaning the animation will start when the element comes into view.

            start: "top 100%",
            // Set the start position of the trigger point for the animation at 80% from the top of the viewport.

            end: "bottom 20%",
            // Set the end position of the trigger point for the animation at 20% from the bottom of the viewport.

            markers: false,
            // Display visual markers on the page to show the trigger points and animation ranges. (Useful for debugging)

            onEnter: function () {
                // When the trigger point is reached (element enters the view), execute this function.

                gsap.fromTo(
                    elem,
                    { y: 100, autoAlpha: 0 },
                    // Apply initial styles to the element: moved 100px down on the y-axis and with 0 opacity (hidden).

                    {
                        duration: 1.25,
                        // Set the duration of the animation to 1.25 seconds.

                        y: 0,
                        // Animate the element to move back to its original position (y: 0).

                        autoAlpha: 1,
                        // Animate the element to become fully visible (opacity: 1).

                        ease: "back",
                        // Use a "back" easing function for a smooth animation effect.

                        overwrite: "auto"
                        // Automatically handle conflicting animations to prevent glitches.
                    }
                );
            },

            onLeave: function () {
                // When the element leaves the view, execute this function.

                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
                // Animate the element to fade out (autoAlpha: 0) when it's about to leave the view.
            },

            onEnterBack: function () {
                // When scrolling back up and the trigger point is reached again, execute this function.

                gsap.fromTo(
                    elem,
                    { y: -100, autoAlpha: 0 },
                    // Apply initial styles to the element: moved 100px up on the y-axis and with 0 opacity (hidden).

                    {
                        duration: 1.25,
                        // Set the duration of the animation to 1.25 seconds.

                        y: 0,
                        // Animate the element to move back to its original position (y: 0).

                        autoAlpha: 1,
                        // Animate the element to become fully visible (opacity: 1).

                        ease: "back",
                        // Use a "back" easing function for a smooth animation effect.

                        overwrite: "auto"
                        // Automatically handle conflicting animations to prevent glitches.
                    }
                );
            },

            onLeaveBack: function () {
                // When scrolling back up and the element is about to leave the view again, execute this function.

                gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
                // Animate the element to fade out (autoAlpha: 0) when it's about to leave the view again.
            }
        });
    });
}
