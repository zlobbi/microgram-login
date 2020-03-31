'use strict';

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
	constructor(id, userId, image, descriprtion, likes, date) {
		this.id = id,
		this.userId = userId,
		this.image = image,
		this.descriprtion = descriprtion,
		this.likes = likes;
		this.date = date
	}
};

const post = new Post(1, user.id, "image.img", "long text", 0, "22.01.2019");

const user2 = new User(2, "gena@gena.com", false);
authorize(user2);
class Comment {
	constructor(commentator, commentFor, comment, date) {
		this.comentator = commentator,
		this.commentFor = commentFor,
		this.comment = comment,
		this.date = date
	}
};

const comment = new Comment(user2.id, post.id, "long text", "23.01.2019");

console.log(user);
console.log(post);
console.log(user2);
console.log(comment);

//posts array declaration
let posts = [];
//function for creating new post
function newPost(i) {
	return new Post(i+2, user.id, "image" + i + ".img", "text" + i, 0, "2" + i + ".01.2019");
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