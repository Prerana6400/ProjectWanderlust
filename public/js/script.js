// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


 function scrollFilters(direction) {
    const scrollBox = document.querySelector('.scroll-container');
    const scrollAmount = 200;

    if (direction === 'left') {
      scrollBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


//tax block
  let taxSwitch = document.getElementById("flexswitchCheckDefault");
   taxSwitch.addEventListener("click",()=>{
   let taxInfo=document.getElementsByClassName("tax-info");
    for(info of taxInfo){
      if(info.style.display != "inline"){
        
      info.style.display="inline";

    }
    else{
      info.style.display="none";
    }
   }
  } );


 