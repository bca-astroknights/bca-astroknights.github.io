fetch("./bloglist.txt")
    .then(x => x.text())
    .then(data => {
        data.replace(/\r\n/g, "\n").split("\n").forEach(element => appendBlog(element));
    });

function appendBlog(blogFile) {
    let tag = document.createElement("a");
    let title = blogFile.replace(/^.*[\\\/]/, "").replace(/\.[^/.]+$/, "");
    let text = document.createTextNode(title);
    tag.appendChild(text);
    tag.href = blogFile;
    let element = document.getElementById("blogsContainer");
    element.appendChild(tag);
    element.appendChild(document.createElement("br"));
}