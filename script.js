window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const blurValue = Math.min(scrolled / 50, 10);
  document.querySelector('.background').style.filter = `blur(${blurValue}px)`;
});
