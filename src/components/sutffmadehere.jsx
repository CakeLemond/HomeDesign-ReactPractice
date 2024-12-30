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

<ul className="flex justify-between gap-6">
  {LinkArrays.map((item, index) => (
    <li key={index} className="relative  ">
      <motion.a
        className="font-poppins py-32 translate-y-7"
        href={`/${item.toLowerCase()}`}
        onClick={() => handleAnimation()}
      >
        {item}
      </motion.a>
      <motion.a
        variants={{ initial: { y: "200%" }, visible: { y: 0 } }}
        initial="initial"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-poppins absolute right-0  "
        href={`/${item.toLowerCase()}`}
      >
        {item}
      </motion.a>
    </li>
  ))}
</ul>;
