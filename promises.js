const posts = [
  { title: "One", body: "1st" },
  { title: "Two", body: "2nd" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//**add callback function to args in parameter */
function createPost(post) {
  //two params, resolve the pending promise or reject in the case of an error
  return new Promise((resolve, reject) => {
      //waiting...when time out is done it resolves, when it resolves it calls get post
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error, somethings not right");
      }
    }, 2000);
  });
  //if this function takes less time than getPosts it will be added to the posts array and then printed
  //to the web page, if longer it gets added after the page has already been sent the message. No good.
  //for this we need callback for control.
}

//.then notation is used in promises, the argument passed is get posts
//.catch is used to catch errors.
createPost({ title: "Three", body: "3rd" }).then(getPosts).catch(err => console.log(err));

//************Promise.all example
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));


// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); 
//this is going to take however long the longest promise is to execute
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));


//more and more libraries are using promises, meaning you are most often going to be dealing with 
//responses and not creating new promises yourself. Mongoose uses promises with node for example.