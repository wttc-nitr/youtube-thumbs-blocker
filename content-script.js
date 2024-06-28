console.log("hi from trial-ext");

let i = 0;

function _hide() {
    // document.querySelectorAll("a#thumbnail").forEach((x) => {
    //     // x.children[0].style.display = "none";
    //     if (i === 0) {
    //         console.log(x.children);
    //         i++;
    //     }
    // });

    document
        .querySelectorAll("#content > ytd-rich-shelf-renderer")
        .forEach((x) => {
            x.style.display = "none";
        });
    document
        .querySelectorAll("#contents > ytd-reel-shelf-renderer")
        .forEach((x) => {
            x.style.display = "none";
        });

    document
        .querySelectorAll("#contents > yt-horizontal-list-renderer")
        .forEach((x) => {
            x.style.display = "none";
        });
    document
        .querySelectorAll("ytd-reel-shelf-renderer > div#contents")
        .forEach((x) => {
            x.style.display = "none";
        });
}

// Run when DOM tree has built & resource are not loaded
window.addEventListener("DOMContentLoaded", _hide);

// Run when the DOM updates
const observer = new MutationObserver(_hide);
observer.observe(document.documentElement, { childList: true, subtree: true });
