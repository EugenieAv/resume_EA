const linkToDiv = () => {
  const btnOne = document.getElementById("btnOne");
  const btnTwo = document.getElementById("btnTwo");
  const btnThree = document.getElementById("btnThree");
  const btnFour = document.getElementById("btnFour");
  const btnFive = document.getElementById("btnFive");

  const divs = document.querySelectorAll('.hide');
  const markers = document.querySelectorAll('.marker');

  const target1 = document.getElementById('about-me');
  const target2 = document.getElementById('langage');
  const target3 = document.getElementById('projet');
  const target4 = document.getElementById('experience');
  const target5 = document.getElementById('formation');

  const changeIcon = (target) => {
    target.querySelector('i').classList.toggle('fa-expand-alt');
    target.querySelector('i').classList.toggle('fa-compress-alt');
  }

  const scrollToTheDiv = (target) => {
    target.scrollIntoView({
      // alignToTop: true,
      block: 'end',
      behavior: 'smooth',
      inline: 'nearest'
    })
  }


  const refacto = (item1, item2, item3) => {
    if (item1.classList.contains('hide')){
      item2.classList.remove('hide');
      scrollToTheDiv(item3);
      changeIcon(item3);
    } else {
      item1.classList.toggle('hide');
      changeIcon(item3);
    }
  }

  btnOne.addEventListener('click', () => {
    event.preventDefault();
    refacto(markers[0], divs[0], target1);
    // if (markers[0].classList.contains('hide')){
    //   divs[0].classList.remove('hide');
    //   scrollToTheDiv(target1);
    //   changeIcon(target1);
    // } else {
    //   markers[0].classList.toggle('hide');
    //   changeIcon(target1);
    // }
  })

  btnTwo.addEventListener('click', () => {
    event.preventDefault();
    refacto(markers[1], divs[1], target2);
  })

  btnThree.addEventListener('click', () => {
    event.preventDefault();
    refacto(markers[2], divs[2], target3);
  })

  btnFour.addEventListener('click', () => {
    event.preventDefault();
    refacto(markers[3], divs[3], target4);
  })


  btnFive.addEventListener('click', () => {
    event.preventDefault();
    refacto(markers[4], divs[4], target5);
  })

};

export { linkToDiv }
