var originalColor;
var otherLinkOriginalColor;

let githubCaption = document.createElement("h2");
githubCaption.innerText = "Here's one of my github accounts! I put school content in the first one (so much of that is designated private), and personal projects in the second one.";
githubCaption.style.display = "hidden";
githubCaption.style.color = "#C3D0DC";
githubCaption.style.width = "80vw";
githubCaption.style.marginLeft = "auto";
githubCaption.style.marginRight = "auto";
let mainContent = document.getElementById("main-content");
mainContent.prepend(githubCaption);


function handleHoverGithubLink(linkNumber) {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#52575C";

    otherLinkIndex = Math.abs(linkNumber - 1);

    let otherGithubLink = document.getElementsByTagName("h2")[otherLinkIndex].firstChild;
    otherLinkOriginalColor = otherGithubLink.style.color;
    otherGithubLink.style.color = "#52575C";

    let title = document.getElementsByTagName("h1")[0];
    title.style.color = "#C3D0DC";

    let form = document.getElementsByTagName("form")[0];
    form.style.opacity = 0.1;

    githubCaption.style.display = "visible";
}

function handleHoverExitGithubLink(linkNumber) {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#C3D0DC";

    let githubLink = document.getElementsByTagName("h2")[linkNumber].firstChild;
    githubLink.style.color = originalColor;

    let otherGithubLink = document.getElementsByTagName("h2")[otherLinkIndex].firstChild;
    otherGithubLink.style.color = otherLinkOriginalColor;

    let title = document.getElementsByTagName("h1")[0];
    title.style.color = "#52575C";

    let form = document.getElementsByTagName("form")[0];
    form.style.opacity = 1.0;

    githubCaption.style.display = "hidden";

}