const makeMagicMail = () => {
  anime.timeline()
    .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 5400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16 .letters',
    translateY: [-100,0],
    duration: 5400,
    easing: "easeOutExpo",
    delay: (el, i) => 30 * i
  });
}

const showItems = () => {
  const divMail = document.querySelector('#div-mail');
  const divTel = document.querySelector('#div-tel');
  const mail = document.querySelector('#email');
  const tel = document.querySelector('#tel');

  mail.innerHTML = mail.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  tel.innerHTML = tel.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  divMail.addEventListener('mouseover', () =>{
    mail.classList.remove('d-none');
    anime.timeline()
      .add({
      targets: '.ml16 .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 30 * i
    });
  });
  divTel.addEventListener('mouseover', () =>{
    tel.classList.remove('d-none');
    anime.timeline()
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2200,
      delay: (el, i) => 500 + 30 * i
    });
  });
}

export { showItems };


