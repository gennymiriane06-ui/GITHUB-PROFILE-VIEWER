const searchInput = document.getElementById("searchInput");
const profileContainer = document.getElementById("profileContainer");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");

async function searchUser() {
  const username = searchInput.value.trim();

  if (!username) return;

  profileContainer.innerHTML = "";
  errorBox.classList.add("hidden");
  loading.classList.remove("hidden");

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    displayUser(data);

  } catch (error) {
    errorBox.textContent = error.message;
    errorBox.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}

function displayUser(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${user.avatar_url}" alt="avatar"/>
    <h2>${user.name || user.login}</h2>
    <p>${user.bio || "No bio available"}</p>

    <div class="stats">
      <span>{user.public_repos} Repos</span>
      <span>{user.followers} Followers</span>
    </div>
  `;

  // Click → open GitHub profile
  card.addEventListener("click", () => {
    window.open(user.html_url, "_blank");
  });

  profileContainer.appendChild(card);
}

// Enter key support
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchUser();
  }
});