const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, (e) => {
e.preventDefault();
const email = form.elements.email.value.trim();
const pass = form.elements.password.value.trim();
if (!pass || !email) {
alert('All form fields must be filled in');
return;
} else {
const newData = {
email: email,
password: pass,
};
console.log(newData);
}
form.reset();
});
