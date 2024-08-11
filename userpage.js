
const dashboard = document.getElementById("dashboard");
const application = document.getElementById("application");
const signout = document.getElementById("signout");

// Add an event listener to the div
dashboard.addEventListener('click', function() {
  // Redirect to another HTML page
  window.location.href = 'sudeep.html';
});

// Add an event listener to the div
application.addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'application.html';
  });

// Add an event listener to the div
signout.addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'index.html';
  });