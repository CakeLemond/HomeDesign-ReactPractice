useEffect(() => {
  const lenis = new Lenis({
    duration: 2, // Speed of the scroll
    smooth: true, // Enable smooth scrolling
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Inertia easing
  });

  // This will trigger the scroll update on each animation frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Cleanup on unmount
  return () => {
    lenis.destroy();
  };
}, []);

<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  xmlns="http://www.w3.org/2000/svg"
  className="animate-spin-circle absolute"
>
  <circle
    cx="25"
    cy="25"
    r="22"
    fill="none"
    stroke="blue"
    strokeWidth="3"
    strokeDasharray="440" /* Circumference = 2 * π * r */
    strokeDashoffset="0" /* Start completely hidden */
  />
</svg>;
