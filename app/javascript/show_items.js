const showItems = () => {
  console.log("tutu");

  const iconMail = document.querySelector('.fa-envelope');
  const iconTel = document.querySelector('.fa-phone-alt');
  const email = document.querySelector('#email');
  const tel = document.querySelector('#tel');

  const show = (obj) => {
    obj.classList.remove('d-none');
  }

  const hide = (obj) => {
    obj.classList.add('d-none');
  }

  iconMail.addEventListener('mouseover', () =>
    show(email)
  );
  iconMail.addEventListener('mouseout', () =>
    hide(email)
  );
  iconTel.addEventListener('mouseover', () => {
    tel.classList.remove('d-none');
    tel.classList.add('visible');
    tel.classList.remove('hidden');
  });
  iconTel.addEventListener('mouseout', () => {
    tel.classList.add('hidden');
    tel.classList.remove('visible');
  });
  // divTel.addEventListener('hover', console.log("iksooooo"));

}


export { showItems };


