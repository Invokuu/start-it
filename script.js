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
      bio = document.getElementById('bio');

avatar.addEventListener('load', () => avatar.classList.add('loaded'));

getUser('Invokuu')
    .then(user => {
        avatar.src = user.avatar_url;
        username.textContent = '@' + user.login;
        username.classList.add('loaded');
        bio.textContent = user.bio;
        bio.classList.add('loaded');
        /*getFiles(user.login, 'modul1')
            .then(files => {
                files.forEach(file => {
                    if (file.type === 'dir') {
                        console.info('Assignment:', file.name);
                    }
                });
            })
            .catch(err => console.error(err));*/
    })
    .catch(err => console.error(err));