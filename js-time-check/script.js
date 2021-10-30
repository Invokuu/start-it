const log = document.getElementById('log');

function logTime(prefix) {
    const time = new Date().toTimeString();
    log.innerHTML += `<div>${prefix} lasting av siden: ${time}</div>`
    console.log(`${prefix} lasting av siden: ${time}`);
}

logTime('Under');