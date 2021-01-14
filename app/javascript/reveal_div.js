const reavealDiv = () => {
  console.log('abracadabraaaaa')
  const sections = document.querySelectorAll('.sections');
  console.log(sections);

  sections.forEach( section => {
    const divToReaveal = section.querySelector('.hide');

    section.addEventListener('click', () => {
     divToReaveal.classList.toggle('hide');
    });
  })

};

export { reavealDiv }
