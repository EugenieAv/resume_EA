const linkToDiv = () => {
  const btnOne = document.getElementById("btnOne");
  const btnTwo = document.getElementById("btnTwo");
  const btnThree = document.getElementById("btnThree");
  const btnFour = document.getElementById("btnFour");
  const btnFive = document.getElementById("btnFive");

  const divs = document.querySelectorAll('.hide');

  const target1 = document.getElementById('about-me');
  const target2 = document.getElementById('langage');
  const target3 = document.getElementById('projet');
  const target4 = document.getElementById('experience');
  const target5 = document.getElementById('formation');

  btnOne.addEventListener('click', () => {
    event.preventDefault();
    divs[0].classList.remove('hide');
    target2.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  })

  btnTwo.addEventListener('click', () => {
    event.preventDefault();
    divs[1].classList.remove('hide');
    target2.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  })

  btnThree.addEventListener('click', () => {
    event.preventDefault();
    divs[2].classList.remove('hide');
    target3.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  })

  btnFour.addEventListener('click', () => {
    event.preventDefault();
    divs[3].classList.remove('hide')
    target4.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  })


  btnFive.addEventListener('click', () => {
    event.preventDefault();
    divs[4].classList.remove('hide');
    target5.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  })

};

export { linkToDiv }
