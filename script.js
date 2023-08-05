// Array to store usernames and passwords
const users = [
  { username: "harsh", password: "harshaa" },
  { username: "nisha", password: "nishuuuiuu" },
  { username: "shiva", password: "shivvvuu" },
  { username: "yash", password: "yashuu" },
  { username: "pranjal", password: "pranjalu" },
];

function checkCredentials() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the entered credentials match any of the stored user data
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Redirect to the welcome page
    window.location.href =
      "https://instagram.com/mahi7781?igshid=MzRlODBiNWFlZA==";
    return false;
  } else {
    // Display error message
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "Invalid username or password.";
    return false;
  }
}
