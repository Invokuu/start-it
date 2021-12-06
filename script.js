/**
 * @author Invoku
 * @desc Request function (returns Promise)
 * @param {{method: string, url: string, data: Object, progress: () => void, json: boolean}} obj
 */
function request(obj) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        if ('progress' in obj) xhr.addEventListener('progress', obj.progress);
        xhr.addEventListener('load', evt => {
            let res = xhr.responseText;
            if ('json' in obj) {
                try {
                    res = JSON.parse(xhr.responseText);
                } catch (ex) {
                    reject(ex);
                    return;
                }
            }
            resolve(res, evt);
        });
        xhr.addEventListener('error', reject);
        xhr.addEventListener('abort', reject);
        xhr.open(obj.method, obj.url);
        if ('data' in obj) {
            const params = new URLSearchParams(obj.data);
            xhr.send(params);
            return;
        }
        xhr.send();
    });
}

// Returns a get request promise
function getJSON(url) {
    return request({ method: 'GET', url, json: true });
}

function updateTexts(url, view) {
    getJSON(url)
        .then(meta => {
            view.innerHTML = '';
            if ('name' in meta) view.innerHTML += meta.name;
            if ('desc' in meta) view.innerHTML += '<br>' + meta.desc;
        })
        .catch(err => console.error('No meta file'));
}

// Different shorthand functions
function getUser(user) {
    return getJSON(`https://api.github.com/users/${user}`);
}

function getFiles(user, repo, path = '') {
    return getJSON(`https://api.github.com/repos/${user}/${repo}/contents/${path}`);
}

const converter = new showdown.Converter();

function getReadMe(element, url) {
    request({ method: 'GET', url })
        .then(data => {
            element.innerHTML = converter.makeHtml(data);
        })
        .catch(err => console.error(err));
}

const avatar = document.getElementById('avatar'),
      username = document.getElementById('username'),
      bio = document.getElementById('bio'),
      projects = document.getElementById('dynamic-content');

avatar.addEventListener('load', () => avatar.classList.add('loaded'));

getUser('Invokuu')
    .then(user => {
        avatar.src = user.avatar_url;
        username.textContent = '@' + user.login;
        username.classList.add('loaded');
        bio.textContent = user.bio;
        bio.classList.add('loaded');
        getFiles(user.login, 'start-it')
            .then(modules => {
                modules.forEach(module => {
                    if (module.type === 'dir') {
                        const moduleView = document.createElement('section'),
                              containerView = document.createElement('div'),
                              titleView = document.createElement('h3');
                              tasksView = document.createElement('ul');
                        moduleView.classList.add('d-gray');
                        containerView.classList.add('container');
                        titleView.textContent = module.name.toUpperCase().replaceAll(/\-/gm, ' ');
                        containerView.appendChild(titleView);
                        containerView.appendChild(tasksView);
                        moduleView.appendChild(containerView);
                        getFiles(user.login, 'start-it', module.name)
                            .then(tasks => {
                                tasks.forEach(task => {
                                    const itemView = document.createElement('li')
                                          linkView = document.createElement('a');
                                    linkView.textContent = task.name;
                                    linkView.href = `https://invokuu.github.io/start-it/${module.name}/${task.name}/`;
                                    itemView.appendChild(linkView);
                                    tasksView.appendChild(itemView);
                                    updateTexts(`https://raw.githubusercontent.com/Invokuu/start-it/main/${module.name}/${task.name}/meta.json`, linkView);
                                });
                            })
                            .catch(err => console.error(err));
                        projects.appendChild(moduleView);
                    }
                });
            })
            .catch(err => console.error(err));
    })
    .catch(err => console.error(err));