/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", (event)=>{
    const form = document.querySelector(".newsletter .container form")
    const messageDiv = document.querySelector(".newsletter .container .message")

    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get("email")
        if(email != ""){
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`
        }
        else{
            messageDiv.textContent = "Please enter a valid email address"
        }
    })
})