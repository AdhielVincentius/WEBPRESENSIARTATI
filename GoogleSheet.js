const scriptURL = 'https://script.google.com/macros/s/AKfycbxko9FY27SKqSpfgLPfMdeGsXz52FOwxH18AyGUueRs3AhWEHSTJpVBcwEirBSSaORQ/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent the default form submission
  
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => response.json()) // Assuming the response is JSON
  .then(response => {
    //alert("TERIMAKASIH ATAS KESAN PESANNYA, SAMPAI BERTEMU KEMBALI!");
    //window.location.reload(); // Reload the page after successful submission
    window.location.href = "lanjutan.html";
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("There was an error submitting your form. Please try again.");
  });
});
