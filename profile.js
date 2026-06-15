function fetchprofile() {
    // fetch the username from the input field
    const username = document.getElementById("username").ariaValueMax;

    // fetch hte user data from Github API
    fetch(`https://api.github.com/users/$(username)`)
    .then(response => response.json())
    .then(data => {
        // display user profile information info
        const profileDiv = document,getElementById("profile");
        profileDiv.innerHTML = '
        <h2>$(data.login)</h2>
        '
      })
}