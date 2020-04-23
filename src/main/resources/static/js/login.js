'use strict'
// const BASE_URL = "http://localhost:8080";
//
// function saveUser(user) {
//     const userAsJSON = JSON.stringify(user)
//     localStorage.setItem('user', userAsJSON);
// }
// function restoreUser() {
//     const userAsJSON = localStorage.getItem('user');
//     return JSON.parse(userAsJSON);
// }
//
// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', onLoginHandler);
// async function onLoginHandler(e) {
//     e.preventDefault();
//     const form = e.target;
//     const userFormData = new FormData(form);
//     const user = Object.fromEntries(userFormData);
//     saveUser(user);
//     updateRootPage();
// }
// function updateRootPage() {
//     console.log("LS USER: " + localStorage.getItem('user'));
//     if (localStorage.getItem('user') == null){
//     } else {
//         fetchAuthorised(BASE_URL +'/posts').then(res => {
//             if (res.ok) {
//                 document.getElementById("page-splash").hidden = true;
//                 document.body.classList.remove('no-scroll');
//             } else {
//                 console.log(res.status)
//             }
//         });
//     }
// }
//
// function updateOptions(options) {
//     const update = { ...options };
//     update.mode = 'cors';
//     update.headers = { ... options.headers };
//     update.headers['Content-Type'] = 'application/json';
//     const user = restoreUser();
//     if(user) {
//         update.headers['Authorization'] = 'Basic ' + btoa(user.username + ':' + user.password);
//     }
//     return update;
// }
//  function fetchAuthorised(url, options) {
//     const settings = options || {};
//     return  fetch(url, updateOptions(settings));
// }