// 'use strict';
//
// window.addEventListener('load', function () {
//     function hideSplashScreen() {
//         document.getElementById('page-splash').hidden = true;
//         document.body.classList.remove('no-scroll');
//
//
//     };
//
//     function showSplashScreen() {
//         document.getElementById('page-splash').hidden = false;
//         document.body.classList.add('no-scroll');
//
//     };
//     const signUp = document.getElementsByClassName('btn-submit')[0];
//     signUp.addEventListener('click', hideSplashScreen);
// });
//
// function createCommentElement(comment) {
//     let elem = document.createElement('div');
//     elem.classList.add('py-2');
//     elem.classList.add('pl-3');
//     elem.innerHTML = '<a href="#" class="muted">' + comment.comentator + '</a>' +
//         '<p>' + comment.comment + '</p>';
//
//     return elem;
// };
//
// function createPostElement(post) {
//     let elem = document.createElement('div');
//     elem.classList.add('card');
//     elem.classList.add('my-3');
//     elem.innerHTML =
//         '<div>' +
//         '<img class="d-block w-100" src="' + post.image + '" alt="Post image">' +
//         '</div>' +
//         '<div class="px-4 py-3">' +
//         '<div class="d-flex justify-content-around">' +
//         '<span class="h1 mx-2 muted">' +
//         '<i class="far fa-heart"></i>' +
//         '</span>' +
//         '<span class="h1 mx-2 muted">' +
//         '<i class="far fa-comment"></i>' +
//         '</span>' +
//         '<span class="mx-auto"></span>' +
//         '<span class="h1 mx-2 muted">' +
//         '<i class="far fa-bookmark"></i>' +
//         '</span>' +
//         '</div>' +
//         '<hr>' +
//         '<div>' +
//         '<p>' + post.descriprtion + '</p>' +
//         '</div>' +
//         '<hr>' +
//         '<div id="comments">' +
//         '<div class="py-2 pl-3">' +
//         '<a href="#" class="muted">' + 'someusername' + '</a>' +
//         '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.' + '</p>' +
//         '</div>' +
//         '</div>' + '</div>';
//     addEventListeners(elem);
//     return elem;
// };
// let u;
// async function getUser() {
//     return await fetch('http://localhost:8080/demo/getUser');
// }
//
// function justTesting() {
//     return getUser().then(res => res.json());
// }
// justTesting().then(data => {
//     log(data.id);
// });
// function log(x) {
//     u = x;
//     console.log("this: " + u);
// };
//
// function addImgUploadForm() {
//     let elem = document.getElementById('img-upload');
//
//     elem.innerHTML = '<form id="login-form" method="post" action="/addPost">' +
//         '<input type="text" placeholder="Image"  name="image" id="im">' +
//         '<br>' +
//         '<textarea placeholder="Description" name="description">' + '</textarea>' +
//         '<br>' +
//         '<button type="submit" id="upload">upload</button>' +
//         '</form>';
//
// };
// // addImgUploadForm();
//
//
// let upload = document.getElementById('upload');
// upload.addEventListener('click', function () {
//    let elem = document.getElementById('login-form');
//    let im = elem.elements['image'].value;
//    console.log(im);
//    let des = elem.elements.namedItem('description').value;
//    let p = new Post(im, des, "22.01.2019");
//    console.log(p);
//    addPost(createPostElement(p));
// });
//
// function addPost(postElem) {
//     document.getElementById('posts-cont').append(postElem);
//
// };
// hideUploadForm();
//
// function hideUploadForm() {
//     document.getElementById('img-upload').hidden = true;
// }
//
// const addP = document.getElementsByClassName('upload')[0];
// addP.addEventListener('click', function () {
//     document.getElementById('img-upload').hidden = false;
//     document.getElementById('posts-cont').hidden = true;
// });
//
// class User {
//     constructor(name, email, isAuthorised) {
//         this.id = uuid4(),
//             this.name = name,
//             this.email = email,
//             this.isAuthorised = isAuthorised;
//     }
// };
//
// function uuid4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }
//
//
// function authorize(user) {
//     user.isAuthorised = true;
// };
//
// const user = new User("Vasya", "vas@vas.com", false);
// authorize(user);
//
//
// /* when creating a post, we take id from an authorized
//  user and transfer it to the backend for adding to the database */
// class Post {
//     constructor(image, descriprtion, date) {
//         this.id = uuid4(),
//             this.userId = uuid4(),
//             this.image = image,
//             this.descriprtion = descriprtion,
//             this.likes = 0;
//         this.date = date
//     }
// };
//
// const user2 = new User("Gena", "gena@gena.com", false);
//
// authorize(user2);
//
// class Comment {
//     constructor(commentator, commentFor, comment, date) {
//         this.comentator = commentator,
//             this.commentFor = commentFor,
//             this.comment = comment,
//             this.date = date
//     }
// };
//
// //posts array declaration
// let posts = [];
//
// //function for creating new post
// function newPost(i) {
//     i++;
//     return new Post("image" + i + ".img", "text" + i, "2" + i + ".01.2019");
// };
// //initialize posts array
// for (let i = 0; 2 > i; i++) {
//     posts[i] = newPost(i);
//     addPost(createPostElement(posts[i]));
// }
// ;
//
// //function for print posts
// function toPrint(post) {
//     console.log(post);
// };
// posts.forEach(toPrint);
//
// //function for like or unlike post
// function like(post, postId, isLiked) {
//     if (post.id === postId) {
//         isLiked ? post.likes++ : post.likes--;
//         console.log(post);
//     }
//     ;
// };
// let postId = 4;
// let isLiked = true;
// for (let i = 0; i < posts.length; i++) {
//     like(posts[i], postId, isLiked);
// }
// ;
//
// function addEventListeners(post) {
//     let ima = post.getElementsByClassName('w-100')[0];
//     let bo = post.getElementsByClassName('fa-bookmark')[0];
//     let he = post.getElementsByClassName('fa-heart')[0];
//
//     ima.addEventListener('dblclick', function () {
//         he.classList.add('text-danger');
//         he.classList.add('fas');
//         he.classList.remove('far');
//     });
//     he.addEventListener('click', function () {
//         if (he.classList.contains('fas')) {
//             he.classList.remove('fas');
//             he.classList.remove('text-danger');
//             he.classList.add('far');
//         } else {
//             he.classList.remove('far');
//             he.classList.add('text-danger');
//             he.classList.add('fas');
//         }
//     });
//     bo.addEventListener('click', function () {
//         if (bo.classList.contains('fas')) {
//             bo.classList.remove('fas');
//             bo.classList.add('far');
//         } else {
//             bo.classList.remove('far');
//             bo.classList.add('fas');
//         }
//     })
//
// };
//
// addEventListeners(document.getElementById('it'));
//
//
//
//
