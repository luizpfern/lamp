const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("inName").value
    const email = document.getElementById("inEmail").value
    const message = document.getElementById("inMessage").value

    Email.send({
        SecureToken : "1a54ba8f-2f23-4e6d-8b3b-93205663ff10",
        To : 'contatolampweb@gmail.com',
        From : "contatolampweb@gmail.com",
        Subject : "Contato Lamp",
        Body : `Nome: ${name} <br>
                Email: ${email} <br>
                Mensagem: ${message}`
    }).then(
      message => alert(message)
    );
    frm.reset()
})