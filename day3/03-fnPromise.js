function fnPromise() {

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


  fnUser(1)
    .then((user) => fnPost(user))
    .then((userPost) => fnComments(userPost))
    .then((comments) => console.log(comments.reply));

}

fnPromise();

/*
User details fetched 
New message posed by Ram 
New comment for your post : 'How are you friends?' 
Fine, Ram 
*/