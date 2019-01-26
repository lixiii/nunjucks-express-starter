# Nunjucks + Express Starter Project

*Currently work in progress*

This starter template assumes we are working with `sample.com` which you should of course change to the correct domain. 

## Dependencies

Project dependencies can be installed using ```npm i``` **BUT** this project requires on the following *global* dependencies.

- NodeJS v8.9.x or above
- pm2 (install using `npm i -g pm2`)

## Features included in this template

This template includes all of the following features. If you do not need any of them, delete/modify the corresponding files. 

| Feature | Files / Folders | Remarks|
|:---:|:---:|---|
| Nginx reverse proxy |  sample.com.conf, _scripts/deploy.sh | I use this to make a server serve multiple domains at the same time. Each domain is served by Express over a different port and Nginx reverse proxy routes traffic to the correct port |
| robots.txt | templates/robots.txt |  |
| Simple deploy script | _scripts/deploy.sh, package.json | This script is run over SSH on the target server. This is the simplest possible deploy script: it pulls the repo and restarts `forever` |
| Resources synchronisation script | _scripts/sync.sh | This script uses `rsync` to synchronise front-end resources that are not committed to `git` |
| NPM deploy script | package.json | The `npm run deploy` command basically runs the sync and deploy scripts decribed above |
| NPM dev script | package.json | The `npm run dev` command starts `nodemon` on `server.js`, listening for changes to both JS files and NJK template files |
| Simple templating | templates/ | As the name suggests, `superParent.njk` is the parent of all public pages. It includes the standard HTML meta tags and you should include global stylesheets and scripts here. `_emptyPage.njk` is the skeleton of a page and it is empty. `home.njk` is an example of how you should populate `_emptyPage.njk`. |
| Commonly git-ignored files | .gitignore | This includes commonly ignored files, eg those generated by operating systems. |
| Cross-Site Request Forgery (CSRF) protection| controllers/routes.js | You might want to remove this if it is not a concern |


## Structure of the starter template

```
Starter Project/
|-- _scripts/
|   |-- deploy.sh
|   |-- sync.sh
|-- assets/
|-- controllers/
|   |-- routes.js
|-- credentials/
|-- templates/
|   |-- _emptyPage.njk
|   |-- footer.njk
|   |-- header.njk
|   |-- superParent.njk
|   |-- robots.txt
|-- .gitignore
|-- package.json
|-- sample.com.conf
|-- server.js
```
This is, by no means, a best practice, but I have found this structure very helpful even for large projects. However, this template definitely works very well for quick projects. 