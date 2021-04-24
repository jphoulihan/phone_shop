//async await is a way to handle responses

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

  //Async /Await
  //it is just a more elegant way to handle promises
  async function init() {
   await createPost({ title: "Three", body: "3rd" })
   getPosts();
  }

  //example with fetch
  async function fetchUsers(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
  }

  init();
  fetchUsers();wq