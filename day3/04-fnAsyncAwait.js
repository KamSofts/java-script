function fnAsyncAwait() {

  function fnUser(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("User details fetched");
        resolve({
          id: id,
          name: "Ram"
        });
      }, 1000);
    });
  }

  function fnPost(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("New message posed by", user.name);
        resolve({
          message: "How are you friends?"
        });
      }, 1000);
    });

  }

  function fnComments(userPost) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("New comment for your post :", `'${userPost.message}'`);
        resolve({
          reply: "Fine, Ram"
        });
      }, 1000);
    });
  }

  async function run() {
    const user = await fnUser(1);
    const userPost = await fnPost(user);
    const comments = await fnComments(userPost);
    console.log(comments);
  }
	
  run();
}

fnAsyncAwait();

/*
User details fetched 
New message posed by Ram 
New comment for your post : 'How are you friends?' 
Object { reply: "Fine, Ram" }
*/