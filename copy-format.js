const getText = (id) => document.getElementById(id).innerHTML;
const removeTitle = (string) => {
  let newString = string.replace(/(\s)+/gm, '');
  newString = newString.match(/(?<=\:)(.+)/gm);
  return newString[0];
}

const copyBtn = document.getElementById('copy-format-btn');

copyBtn.addEventListener('click', async () => {
  const regex = /\[(.*?)\]/gm
  const getRawRank = rank => rank.match(regex)[0].replace('[','').replace(']','');
  const username = getText("roblox-info-username")
  const id = getText("roblox-info-id")
  const groups = getText("roblox-info-groups")
  const rank = getText("roblox-info-usmcrank")
  const format = `Ticket:\nAgent:\nSuspect: ${removeTitle(username)}\nSuspect's Rank: ${getRawRank(rank)}\nSuspect's Regiment: ${removeTitle(groups)}\nSuspect's Roblox ID: ${removeTitle(id)}\nOffence:\nPunishment:\nApproved by:`
  navigator.clipboard.writeText(format);
});
