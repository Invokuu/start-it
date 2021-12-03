const initialTime = Date.now();

// Allows us to check load time of scripts and styles in console
function loaded(self) {
    let url = self.src ? self.src : self.href;
        name = url.substr(url.lastIndexOf('/') + 1),
        time = Date.now(),
        tag = (self.tagName === 'LINK' ? self.rel : self.tagName).toLowerCase(),
        css = 'font-family: verdana, sans-serif; color: white; padding: 5px; ';
    console.info(
        `%c ${tag} %c ${name} %c ${time - initialTime}ms `,
        css + 'background-color: #7289da; border-radius: 5px 0 0 5px;',
        css + 'background-color: #2e3136;',
        css + 'background-color: #43b581; border-radius: 0 5px 5px 0;'
    );
}