const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const formIn = document.getElementById('form_in');
const formUp = document.getElementById('form_up');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    formIn.classList.toggle("show");
    formUp.classList.toggle("show");

});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    formIn.classList.toggle("show");
    formUp.classList.toggle("show");
});