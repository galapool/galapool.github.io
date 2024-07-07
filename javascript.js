const scriptURL = 'https://script.google.com/macros/s/AKfycbyv0BNEQPF-HgJ92qyI8ThoqxSNssSlm5jm4p3kUrxdIeaAUH5VkQJgbNQ8UAfyya-u/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})