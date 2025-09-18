# 🚀 GitHub Cheatsheet

Quick reference for creating and syncing a local project with GitHub.

---

## 1. Create a new repo on GitHub
- Go to: https://github.com/new  
- Enter a repo name  
- Choose **Public** or **Private**  
- **Do not** initialize with README (since project already exists locally)

---

## 2. Initialize Git locally
- ```bash
- cd your-project-folder
- git init

---

## 3. Add & commit files
- git add .
- git commit -m "Initial commit"

---

## 4. Copy the repo URL from GitHub
- git remote add origin https://github.com/username/repo-name.git
-git remote -v   # verify remote

---

## 5. Copy the repo URL from GitHub
- git branch -M main
# rename branch to main if needed
- git push -u origin main

---

## Daily Workflow
- git add .
- git commit -m "Describe your changes"
- git push

---

## Useful Commands
- git status → check changes
- git log --oneline → see commit history
- git pull → sync with GitHub (before pushing if working with others)