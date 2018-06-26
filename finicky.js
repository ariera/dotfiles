// https://github.com/johnste/finicky
// brew cask install finicky
//
finicky.setDefaultBrowser('com.google.Chrome')

finicky.onUrl(function(url, opts) {
    if (url.match(/(github|basecamp|gmail|safaribooksonline|doodle)\.com/)) {
        return {
            bundleIdentifier: 'com.apple.safari'
        }
    } else if (url.match(/(embo.org)/)) {
        return {
            bundleIdentifier: 'com.google.Chrome'
        }
    }
});

// Open Spotify links in client
finicky.onUrl(function(url, opts) {
    if (url.match(/^https?:\/\/open\.spotify\.com/)) {
        return {
            bundleIdentifier: 'com.spotify.client'
        }
    }
});

// Open Twitter links in client
// finicky.onUrl(function(url, opts) {
//     var matches = url.match(/^https?:\/\/twitter\.com\/.+\/status\/([0-9]+)/)
//     if (matches && matches[1]) {
//         var statusId = matches[1];
//         return {
//             url: 'twitter://status?id=' + statusId,
//             bundleIdentifier: 'com.twitter.twitter-mac'
//         }
//     }
// });

// Rewrite all Bing links to DuckDuckGo instead
// finicky.onUrl(function(url, opts) {
//     var url = url.replace(/^https?:\/\/www\.bing\.com\/search/, 'https://duckduckgo.com')
//     return {
//         url: url
//     }
// });

// Always open links from Mail in Safari
// finicky.onUrl(function(url, opts) {
//     var sourceApplication = opts && opts.sourceBundleIdentifier
//     if (sourceApplication === 'com.apple.mail') {
//         return {
//             bundleIdentifier: 'com.apple.safari'
//         }
//     }
// });

// By supplying an array of bundle identifiers, finicky opens the url in the first one
// that's currently running. If none are running, the first app in the array is started.
// finicky.onUrl(function(url, opts) {
//     return {
//         bundleIdentifier: ['com.electron.brave', 'com.google.Chrome', 'org.mozilla.firefox', 'com.apple.Safari']
//     }
// });
