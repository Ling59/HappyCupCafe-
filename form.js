const ic = document.getElementById('ic')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (ic.value.length =!12) {
        messages.push('IC number must be 12 digits without -')
    }

    if (phone.value.length >=11 ) {
        messages.push('Phone number must be less than 11 digits without -')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})