#!/bin/bash
npm install

if git show-ref --verify --quiet refs/heads/gh-pages; then
  git checkout gh-pages || exit 1
else
  git checkout -b gh-pages || exit 1
fi


git merge main --no-edit || exit 1

npm run build  || exit 1

git add dist -f && git commit -m "Deployment commit" 

git add dist -f  

git commit -m 'Deployment commit'

npm run deploy
git checkout main

git push