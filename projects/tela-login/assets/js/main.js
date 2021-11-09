/* direcionar todas as classes e Id do HTML dentro do JS */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementById(classes);

/* armazenar as classes e Id dentro das variáveis */

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

/* direcionar o form para um event listner */

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "O campo login não pode estar em branco");
    engine(email, 1, "O campo e-mail não pode estar em branco");
    engine(password, 2, "O campo senha não pode estar em branco");
});

/* função que fará a validação do form, contendo 3 argumentos 

- id: terá como alvo o ID
- serial: terá como alvo as classes
- mensagem: imprimirá uma msg dentro da classe .error

*/

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid gree";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}