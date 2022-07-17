const _form = document.querySelector('.login-form')

_form.addEventListener('submit', onButtonSubmit)

function onButtonSubmit (event) {
    event.preventDefault()
    const { email, password } = event.currentTarget

      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      }

      const result = {
        email: email.value,
        password: password.value
      }
      console.log(result)
      event.currentTarget.reset();
}

