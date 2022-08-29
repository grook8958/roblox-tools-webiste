const getText = (id) => document.getElementById(id);

const copyBtn = document.getElementById('copy-format-btn');

copyBtn.addEventListener('click', async () => {
  const regex = /\[(.*?)\]/gm
  const getRawRank = rank => rank.match(regex).replace('[','').replace(']','');
  
  const username = getText("roblox-info-username")
  const displayName = getText("roblox-info-displayname")
  const pastUsernames = getText("roblox-info-pastusernames")
  const id = getText("roblox-info-id")
  const groups = getText("roblox-info-groups")
  const rank = getText("roblox-info-usmcrank")
  
  const format = `Ticket:\nAgent:\nSuspect: ${username}\nSuspect's Rank: ${getRawRank(rank)}\nSuspect's Regiment: ${groups}\nSuspect's Roblox ID: ${id}\nOffence:\nPunishment:\nApproved by:`
  navigator.clipboard.navigator.wrtiteText(format);
});
