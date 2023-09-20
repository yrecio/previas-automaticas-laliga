const PASSWORD = "ur903-AKsdaa-ii+Ps2-239Cs";

function checkPassword() {
    let input = document.getElementById('passwordInput').value;
    
    if (input === PASSWORD) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
}