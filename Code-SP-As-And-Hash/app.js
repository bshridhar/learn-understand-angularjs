window.addEventListener('hashchange', function() {
   
    if (window.location.hash === '#/bookmark/1') {
        console.log('Page 1 is cool.');
    }
    
    if (window.location.hash === '#/bookmark/2') {
        console.log('Let me go get Page 2.');
    }
    
    if (window.location.hash === '#/bookmark/3') {
        console.log('Here\'s Page 3.');
    }

    if (this.window.location.hash === '#/bookmark/4') {
        console.log('Get the content for page 4')
    }
    
});