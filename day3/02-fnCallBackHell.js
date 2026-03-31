function fnCallBackHell() {

  function fnUser(id, callback) {
    setTimeout(() => {
      console.log("User details fetched");
      callback({
        id: id,
        name: "Ram"
      });
    }, 1000);
  }

  function fnPost(user, callback) {
    setTimeout(() => {
      console.log("New message posed by", user.name);
      callback({
        message: "How are you friends?"
      });
    }, 1000);
  }

  function fnComments(userPost, callback) {
    setTimeout(() => {
      console.log("New comment for your post :", `'${userPost.message}'`);
      callback({
        reply: "Fine, Ram"
      });
    }, 1000);
  }


  fnUser(1, function(user) {
    fnPost(user, function(userPost) {
      fnComments(userPost, function(comments) {
        console.log(comments.reply)
      });
    });
  });
}

fnCallBackHell();

/*
User details fetched 
New message posed by Ram 
New comment for your post : 'How are you friends?' 
Fine, Ram 
*/
