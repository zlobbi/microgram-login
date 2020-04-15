'use strict';

window.addEventListener('load', function () {
    function hideSplashScreen() {
        document.getElementById('page-splash').hidden = true;
        document.body.classList.remove('no-scroll');
    };

    function showSplashScreen() {
        document.getElementById('page-splash').hidden = false;
        document.body.classList.add('no-scroll');

    };
    const signUp = document.getElementsByClassName('btn-submit')[0];
    signUp.addEventListener('click', hideSplashScreen);
});

    const addP = document.getElementsByClassName('upload')[0];
    addP.addEventListener('click', function () {
        document.getElementById('img-upload').hidden = false;
        document.getElementById('posts-cont').hidden = true;
    });

    function createCommentElement(comment) {
        let elem = document.createElement('div');
        elem.classList.add('py-2');
        elem.classList.add('pl-3');
        elem.innerHTML = '<a href="#" class="muted">' + comment.cEmail + '</a>' +
            '<p>' + comment.comment + '</p>' +
            '<input name="forPost" type="hidden" value="' + comment.commentFor + '">';
        return elem;
    };

    function createPostElement(post) {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.classList.add('my-3');
        elem.classList.add(post.id);
        elem.id = post.id;
        elem.innerHTML =
            '<div>' +
            '<img class="d-block w-100" src="' + "images/" + post.image + '" alt="Post image">' +
            '</div>' +
            '<div class="px-4 py-3">' +
            '<div class="d-flex justify-content-around">' +
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
            '</div>' +
            '<hr>' +
            
            '<div class="com-upload-form" id="comFor-' + post.id + '" + hidden>' +
            '<form id="com-form" class="com-form">' +
            '<input type="hidden" name="postId" value="' + post.id + '">' +
            '<textarea placeholder="Comment" name="comment"> </textarea>' +
            '<br>' +
            '<button type="button" id="comment">comment</button>' +
            '</form>' +
            '</div>' +
            '<div>' +
            '<p>' + post.description + '</p>' +
            '</div>' +
            '<hr>' +
            '<div id="comments" class="com">' +
            '</div>' + '</div>';
        addEventListeners(elem);
        addEvListenerToCommentButton(elem.getElementsByClassName("com-form")[0]);
        return elem;
    };

    async function getUser() {
        return await fetch('http://localhost:8080/getUser');
    }

    async function getPosts() {
        return await fetch('http://localhost:8080/posts');
    }

    async function getComments() {
        return await fetch('http://localhost:8080/comments');
    }

    getPosts().then(res => res.json()).then(data => addPostsFromDB(data));

    getComments().then(res => res.json()).then(data => addCommentsFromDB(data));

    function addPostsFromDB(data) {
        let i = data.length;
        for (let j = 0; j < i; j++) {
            let p = new Post(data[j].id, data[j].user, data[j].image, data[j].description);
            addPost(createPostElement(p));
        }
    }
    function addCommentsFromDB(data) {
        let i = data.length;
        for(let j = 0; j < i; j++) {
            let c = new Comment(data[j].commentator, data[j].commentFor, data[j].comment, data[j].userEmail);
            addComment(createCommentElement(c));
        }

    }

    function justTesting() {
        return getUser().then(res => res.json());
    }

    justTesting().then(data => {
        log(data.id);
    });

    function log(x) {
        console.log(x);
    };


    function getUserId() {
        return getUser().then(res => res.json()).then(data => getId(data))
    }

    function getId(data) {
        return data.id;
    }

    function getUserEmail() {
        return getUser().then(res => res.json()).then(data => getEmail(data))
    }

    function getEmail(data) {
        return data.email;
    }

    let upload = document.getElementById('upload');
    upload.addEventListener('click', async function () {
        const form = document.getElementById('login-form');
        let data = new FormData(form);
        data.append("userId", await getUserId());
        await fetch('http://localhost:8080/addPost', {
            method: 'POST',
            body: data
        }).then(r => r.json()).then(data => console.log(data));
        window.location.href = 'http://localhost:8080/';
    });

    let comment = document.getElementById('com-form');
    addEvListenerToCommentButton(comment);

    function addEvListenerToCommentButton(fo) {
        let butt = fo.getElementsByTagName('button')[0];
        butt.addEventListener('click', async function () {
            let data = new FormData(fo);
            data.append("userEmail", await getUserEmail());
            data.append("userId", await getUserId());
            await fetch('http://localhost:8080/addComment', {
                method: 'POST',
                body: data
            }).then(r => r.json()).then(data => console.log(data));
            let c = new Comment(data.get("userId"), data.get("postId"), data.get("comment"), data.get("userEmail"));
            // addComment(createCommentElement(c));
            document.getElementById('comFor-' + c.commentFor).hidden = true;
            window.location.href = 'http://localhost:8080/';
        });
    }

    function addComment(commentElem) {
        let pId = commentElem.getElementsByTagName('input')[0].value;
        let postsCont = document.getElementById("posts-cont");
        let p = postsCont.getElementsByClassName(pId)[0];
        // if(p != null) {
            p.getElementsByClassName("com")[0].append(commentElem);
        // } else {
        //     p = document.getElementById(pId);
        //     p.getElementsByClassName("com")[0].append(commentElem);
        // }
    }

    function addPost(postElem) {
        document.getElementById('posts-cont').append(postElem);
    };
    hideUploadForm();

    function hideUploadForm() {
        document.getElementById('img-upload').hidden = true;
    };


    class User {
        constructor(name, email, isAuthorised) {
            this.id = uuid4(),
                this.name = name,
                this.email = email,
                this.isAuthorised = isAuthorised;
        }
    };

    class Post {
        constructor(id, userId, image, description) {
            this.id = id,
                this.userId = userId,
                this.image = image,
                this.description = description,
                this.likes = 0;
            // this.date = date
        }
    };

    class Comment {
        constructor(commentator, commentFor, comment, cEmail) {
            this.comentator = commentator,
                this.commentFor = commentFor,
                this.comment = comment,
                this.cEmail = cEmail
            // this.date = date
        }
    };

//function for like or unlike post
    function like(post, postId, isLiked) {
        if (post.id === postId) {
            isLiked ? post.likes++ : post.likes--;
            console.log(post);
        }
        ;
    };

    function addEventListeners(post) {
        let ima = post.getElementsByClassName('w-100')[0];
        let bo = post.getElementsByClassName('fa-bookmark')[0];
        let he = post.getElementsByClassName('fa-heart')[0];
        let com = post.getElementsByClassName('fa-comment')[0];
        let form = post.getElementsByClassName('com-upload-form')[0].getElementsByTagName('form')[0];
        let data = new FormData(form);
        let id = data.get("postId");

        ima.addEventListener('dblclick', function () {
            he.classList.add('text-danger');
            he.classList.add('fas');
            he.classList.remove('far');
        });
        he.addEventListener('click', function () {
            if (he.classList.contains('fas')) {
                he.classList.remove('fas');
                he.classList.remove('text-danger');
                he.classList.add('far');
            } else {
                he.classList.remove('far');
                he.classList.add('text-danger');
                he.classList.add('fas');
            }
        });
        bo.addEventListener('click', function () {
            if (bo.classList.contains('fas')) {
                bo.classList.remove('fas');
                bo.classList.add('far');
            } else {
                bo.classList.remove('far');
                bo.classList.add('fas');
            }
        });
        com.addEventListener('click', function () {
            document.getElementById('comFor-' + id).hidden = false;
        })

    };

    function uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    addEventListeners(document.getElementById('1s'));





