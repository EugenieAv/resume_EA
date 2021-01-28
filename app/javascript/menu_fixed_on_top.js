const menuFixedOnTop = () => {

  const menu = document.querySelector('.menu');
  const btnGoTos = document.querySelectorAll('.btn-go-to');

  // console.log(menu.offsetHeight);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= menu.offsetTop){
      menu.style.background = "#eebbc3";
      menu.style.boxShadow = '1rem 1rem 1rem rgba(0, 0, 0, 0.4)';
      btnGoTos.forEach( btnGoTo => btnGoTo.style.background = "#fffffe");
    } else {
      menu.style.background = '#333e72';
      menu.style.boxShadow = "";
      btnGoTos.forEach( btnGoTo => btnGoTo.style.background = "#eebbc3");
      // btnGoTo.style.background = "#eebbc3";
    }
  })

}

export { menuFixedOnTop };
