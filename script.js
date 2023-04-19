// Get the HTML  querySelector

//Create a function called revealMessage. Inside the function, call setTimeout, passing in a callback function and a time in milliseconds.

function revealMessage() {
    const message = document.getElementById("message")
    // Remove class to show me
    message.classList.remove("hide")
    // wait 1 second before hiding message
    setTimeout(() => {
      message.classList.add("hide")
    }, 1000)
  }
  
  // call revealMessage at bottom of deleteMovie function
  function deleteMovie(event) {
    const listItem = event.target.parentNode
    const movieTitle = listItem.firstChild.textContent;
    listItem.parentNode.removeChild(listItem);
    document.getElementById("notification").textContent = `${movieTitle} deleted!`;
    revealMessage();
    //listItem.remove()
    //revealMessage()
  }

  // call revealMessage at bottom of crossOffMovie function
  function crossOffMovie(event) {
    const listItem = event.target.parentNode
    listItem.classList.toggle("checked")
    if (listItem.classList.contains("checked")) {
        document.getElementById("notification").textContent = `${movieTitle} watched!`
      } else {
        document.getElementById("notification").textContent = `${movieTitle} added back!`
      }
    revealMessage()
  }


  