const scriptURL = 'https://script.google.com/macros/s/AKfycbySPF9Bfz7gj05L6ofeE9ZKIUwvB5ZQJqtw9jk8ktXbhRun0pM/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
    $('#modal').modal('show');
    $('#email').val('');
    $('#Number').val('');
    $('#Name').val('');
    $('#text').val('');
})
