const menuFixedOnTop = () => {

  const menu = document.querySelector('.menu');


  // console.log(menu.offsetHeight);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= menu.offsetTop){
      menu.style.background = 'rgba(217, 217, 217, 0.9)';
      menu.style.boxShadow = '3rem 3rem 10rem rgba(0, 0, 0, 0.4)';
    } else {
      menu.style.background = "rgba(255, 255, 255, 0.4)";
      menu.style.boxShadow = "";
    }
  })

}

export { menuFixedOnTop };
