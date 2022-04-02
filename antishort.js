if (window.location.href.includes("youtube.com/shorts")) {
    let currentUrl = window.location.href;
    // Get the video ID from the URL
    let splitLink = currentUrl.split('/');
    let videoId;

    for (let i = 0; i < splitLink.length; i++) {
        if (splitLink[i] === "shorts") {
            videoId = splitLink[i + 1];
            break;
        }
    }

    if (videoId === undefined) {
        console.log("Anti-short: No video ID found.");
    } else {
        // Redirect to youtube.com/watch?v=videoId
        let videoLink = "https://www.youtube.com/watch?v=" + videoId;
        history.replaceState({}, 'Title', videoLink);
        window.location.href = videoLink;
        console.log(`Anti-short: Redirected to ${videoLink}`);
    }
}