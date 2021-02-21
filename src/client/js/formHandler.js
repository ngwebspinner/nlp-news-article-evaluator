const handleSubmit = (event) => {
    event.preventDefault()

    const model = 'general'
    const langISO = 'en'

    // Analyse text
    const textInput = document.getElementById('text-input').value
    if (textInput && /^(https?|ftp):\/\/[^" ]+$/.test(textInput)) { // check for valid url
        Client.getSentiment(process.env.API_KEY, model, langISO, textInput)
    }
    else {
        alert('Please enter a valid URL')
    }
}

export { handleSubmit }

