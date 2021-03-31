'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    
    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let attachedPost = new AttachedPost('user', 'Hi', new Date(2021, 2, 25));
attachedPost.makeTextHighlighted();
console.log(attachedPost);