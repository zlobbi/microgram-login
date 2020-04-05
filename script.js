'use strict';
function hideSplashScreen() {
	document.getElementById('page-splash').hidden = true;
	document.body.classList.remove('no-scroll');
}

function showSplashScreen() {
	document.getElementById('page-splash').hidden = false;
	document.body.classList.add('no-scroll');
}

function createCommentElement(comment) {
	let elem = document.createElement('div');
	elem.classList.add('py-2');
	elem.classList.add('pl-3');
	elem.innerHTML = '<a href="#" class="muted">'  + comment.comentator + '</a>' + 
	'<p>' + comment.comment + '</p>';
	return elem;
}

function createPostElement(post) {
	let elem = document.createElement('div');
	elem.classList.add('card');
	elem.classList.add('my-3');
	elem.innerHTML = 
	'<div>' +
		'<img class="d-block w-100" src="' + post.image + '" alt="Post image">' +
 	'</div>' +
  	'<div class="px-4 py-3">' +
		'<div class="d-flex justify-content-around">' +
		  '<span class="h1 mx-2 text-danger">' +
			'<i class="fas fa-heart"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-heart"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-comment"></i>' +
		  '</span>' +
		  '<span class="mx-auto"></span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="far fa-bookmark"></i>' +
		  '</span>' +
		  '<span class="h1 mx-2 muted">' +
			'<i class="fas fa-bookmark"></i>' +
		  '</span>' +
		'</div>' +
	'<hr>' +
	'<div>' +
	  '<p>' + post.descriprtion + '</p>' +
	'</div>' +
	'<hr>' +
	'<div id="comments">' +
	'<div class="py-2 pl-3">' +
				  '<a href="#" class="muted">' + 'someusername' + '</a>' +
				  '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.' + '</p>' +
				'</div>' +
	'</div>' + '</div>';
	return elem;
}

function addPost(commentElem) {
	document.getElementById('posts-cont').append(commentElem);
}

hideSplashScreen();
// showSplashScreen();


class User {
	constructor(id, name, email, isAuthorised) {
		this.id = id,
		this.name = name,
		this.email = email,
		this.isAuthorised = isAuthorised;
	}
};


function authorize(user) {
	user.isAuthorised = true;
}
const user = new User(1, "Vasya", "vas@vas.com", false);
authorize(user);
/* when creating a post, we take id from an authorized
 user and transfer it to the backend for adding to the database */
class Post {
	constructor(id, userId, image, descriprtion, date) {
		this.id = id,
		this.userId = userId,
		this.image = image,
		this.descriprtion = descriprtion,
		this.likes = 0;
		this.date = date
	}
};

const post = new Post(1, user.id, "http://placekitten.com/500/500", "long text", "22.01.2019");

const user2 = new User(2, "Gena", "gena@gena.com", false);
authorize(user2);
class Comment {
	constructor(commentator, commentFor, comment, date) {
		this.comentator = commentator,
		this.commentFor = commentFor,
		this.comment = comment,
		this.date = date
	}
};

const comment = new Comment(user2.name, post.id, "long text", "23.01.2019");
let cont = createPostElement(post);
addPost(cont);
document.getElementById('comments').append(createCommentElement(comment));

//posts array declaration
let posts = [];
//function for creating new post
function newPost(i) {
	return new Post(i+2, user.id, "image" + i + ".img", "text" + i, "2" + i + ".01.2019");
};
//initialize posts array
for(let i = 0; 6 > i; i++) {
	posts[i] = newPost(i);
};
//function for print posts
function toPrint(post) {
	console.log(post);
};
posts.forEach(toPrint);

//function for like or unlike post
function like (post, postId, isLiked) {
	if(post.id === postId) {
		isLiked ? post.likes++ : post.likes--;
		console.log(post);
	};
};
let postId = 4;
let isLiked = true;
for(let i = 0; i < posts.length; i++) {
	like(posts[i], postId, isLiked);
};