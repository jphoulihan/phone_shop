const posts = [
    {title: "One", body: "1st"},
    {title: "Two", body: "2nd"},
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//**add callback function to args in parameter */
function createPost(post, callback) {
    setTimeout(()=>{
      posts.push(post);
      //gets called *AFTER* new post is pushed
      callback();  
    }, 2000);
    //if this function takes less time than getPosts it will be added to the posts array and then printed
    //to the web page, if longer it gets added after the page has already been sent the message. No good.
    //for this we need callback for control.
}


getPosts(); //add this get posts as the function that executes in the callback, 
// ensuring all posts display to the screenen *AFTER* the new post is added

//here is where getPosts should be added, as the second arg int the create post function
createPost({title:"Three", body: "3rd"}, getPosts);