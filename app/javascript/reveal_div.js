const reavealDiv = () => {
  const sections = document.querySelectorAll('.sections');
  // const expandArrows = document.querySelectorAll('.fa-expand-alt');

  sections.forEach( section => {
    const divToReaveal = section.querySelector('.hide');
    // const expandArrow = section.querySelector('.fa-expand-alt');
    const arrow = section.querySelector('i');

    arrow.addEventListener('click', () => {
     divToReaveal.classList.toggle('hide');
     if (arrow.classList.contains('fa-expand-alt')){
        arrow.classList.replace('fa-expand-alt', 'fa-compress-alt');
     }
      else {
        arrow.classList.replace('fa-compress-alt', 'fa-expand-alt');
     }
    });

  })

};

export { reavealDiv }
