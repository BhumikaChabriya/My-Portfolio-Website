const username = "zaidkazi05";

async function fetchProfile() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  document.getElementById("profile").innerHTML = `
    <img src="${data.avatar_url}" width="120" style="border-radius: 50%">
    <h1>${data.name}</h1>
    <p>${data.bio}</p>
    <p>Followers: ${data.followers} | Following: ${data.following}</p>
    <p>Location: ${data.location}</p>
    <a href="${data.html_url}" target="_blank">View GitHub</a>
  `;
}

async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  const repos = await res.json();

  let output = `<h2>Top Repositories</h2><ul>`;
  repos.slice(0, 5).forEach(repo => {
    output += `
      <li>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
      </li>
    `;
  });
  output += `</ul>`;
  document.getElementById("repos").innerHTML = output;
}

fetchProfile();
fetchRepos();
