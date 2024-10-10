const container = document.getElementById('container');
const registerbtn = document.getElementById('signup');
const loginbtn = document.getElementById('signin');

registerbtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginbtn.addEventListener('click', () => {
    container.classList.remove("active");
})