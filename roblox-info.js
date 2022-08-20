

const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("error-alert").hidden = true;
  document.getElementById('loading-spinner').hidden = true;
  document.getElementById('roblox-info').hidden = true;
})


document.getElementById('roblox-username-submit').addEventListener('click', async () => {
  document.getElementById('roblox-username-submit').setAttribute("disabled", "any")
  const element = document.getElementById('roblox-info')
  //Do stuff
  element.hidden = true
  document.getElementById("error-alert").hidden = true;
  document.getElementById('loading-spinner').hidden = false;
  const res = await fetch(`https://api.roblox-tools.uk/username/${document.getElementById('roblox-username-input').value}`)
  const data = await res.json();

  if (data.status === 403) {
    document.getElementById('loading-spinner').hidden = true;
    replaceText("error-alert", data.message)
    document.getElementById("error-alert").hidden = false;
    document.getElementById('roblox-username-submit').removeAttribute("disabled")
    return
  }
  
  const user = data.data;

  console.log(data)

  replaceText("roblox-info-username", "Username: " + user.username)
  replaceText("roblox-info-displayname", "Display Name: " + user.displayName)
  replaceText("roblox-info-pastusernames", "Past Usernames: " + user.pastUsernames)
  replaceText("roblox-info-id", "Roblox Id: " + user.id)
  replaceText("roblox-info-groups", "USMC Groups: " + user.USMCgroups)
  replaceText("roblox-info-usmcrank", "USMC Rank: " + user.USMCrank)
  
  const loadImage = src =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
  })  

  const img = await loadImage(user.profilePictureURL)
  img.classList.add('profile-picture')
  document.getElementById('roblox-info-title').prepend(img)
  
  document.getElementById('loading-spinner').hidden = true; 
  document.getElementById('roblox-username-submit').removeAttribute("disabled")
  element.hidden = false
});