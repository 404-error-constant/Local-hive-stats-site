# 🐝 Local Hive Stats Viewer

A simple website that displays your Hive Minecraft server stats in a clean and readable format — all powered by the official Hive API and run **locally on your computer**.

---

## ✅ What You'll Need

- A **Windows 11 PC**
- **Node.js** installed  
  [Download it here](https://nodejs.org/)
- Your **Hive username**
- This project folder (download or clone it)

---

## 🧠 What This Does

This app fetches your Hive minigame stats and shows them in your browser — including XP, victories, kills, deaths, and more for games like:
- 🎯 SkyWars
- 🛏️ BedWars
- 🏃 DeathRun
- 🕵️ Hide and Seek
- 🕹️ Capture the Flag
- 🧱 Block Drop
- 🚀 Gravity
- 💣 Ground Wars
- 🧠 Survival Games
- 🧱 Build Battle
- 🎉 Block Party
- 🔪 Murder Mystery
- 🌉 The Bridge

All data comes directly from the Hive API

---

## ⚙️ Setup Instructions



### 1. 📦 Download or Clone the Repo

If using Git:
```bash
git clone https://github.com/404-error-constant/Local-hive-stats-site.git
Or download the ZIP from GitHub and unzip it.(RECOMENDED)



2. 📁 Open the Folder in Terminal
Open the Local-hive-stats-site folder, right-click, and choose:

"Open in Terminal"

Then install dependencies:
type  "npm install"




3. ✏️ Set Your Hive Username
Open server.js in a text editor (like VS Code or Notepad), and look for this line:

const username = "ChessExpert07";
Change "ChessExpert07" to your own Hive Minecraft username.



4. 🚀 Start the Local Server
From the terminal in your project folder, run:

type "node server.js"
If successful, you'll see:
"Server listening on port 3000"



5. 🌐 Open the Website
In your folder, find index.html(It will have a microsoft edge logo if thats your primary browser)
You'll now see your stats, updated live!

🔄 Refresh to See New Stats
Whenever you win a game or gain XP, just refresh the browser. It will always show your latest Hive stats.

🛑 Stopping & Restarting
To stop the site: Just close the terminal

To restart it later: Open the Local-hive-stats-site folder, right-click, and choose:

"Open in Terminal"
Then run:
node server.js



🔐 Privacy First
This project only fetches your stats and runs completely on your own device. Nothing is uploaded or tracked. I tried really hard to make this a global website that anyone could visit and see their stats, but it was very complex
and the free Render plan i used was less than ideal.

📹 YouTube Tutorial (Coming Soon)
A full video guide showing how to set this up from scratch will be posted soon on @ChessCatMC.

🧊 Credits
Created by ChessExpert07 and Chat-GPT
Powered by the official Hive API
IDK if i need to say this, but this is a 100% unoffical personal project. Hive was not involved.

