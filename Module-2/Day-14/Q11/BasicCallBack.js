function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice";
    callback(username);
  }, 1000);
}

// Example usage:
getUserInput(displayMessage);
