const submitted_form=document.getElementById('submitted')
new URLSearchParams(window.location.search).forEach((value, name) => {
    submitted_form.append(`${name}: ${value}`)
    submitted_form.append(document.createElement('br'))
})