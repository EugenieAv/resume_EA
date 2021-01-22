const menuFixedOnTop = () => {

  const menu = document.querySelector('.menu');


  // console.log(menu.offsetHeight);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= menu.offsetTop){
      menu.style.background = '#360055';
      menu.style.boxShadow = '1rem 1rem 1rem rgba(0, 0, 0, 0.4)';
    } else {
      menu.style.background = "#360055";
      menu.style.boxShadow = "";
    }
  })

}

export { menuFixedOnTop };
