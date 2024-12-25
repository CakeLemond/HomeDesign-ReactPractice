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
