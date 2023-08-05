// Array to store registered usernames and passwords
const registeredUsers = [];

function registerUser() {
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  // Check if the username is already registered
  const isRegistered = registeredUsers.some(
    (user) => user.username === newUsername
  );

  if (isRegistered) {
    const registrationMessage = document.getElementById("registrationMessage");
    registrationMessage.innerText = "Username already registered.";
    return false;
  } else {
    // Register the new user
    registeredUsers.push({ username: newUsername, password: newPassword });
    window.location.href = "index.html"; // Redirect to the login page
    return false;
  }
}
