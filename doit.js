const rules = new Map();
// headers
rules.set(/^###### *(.*)/gm, `[h6]$1[/h6]`);
rules.set(/^##### *(.*)/gm, `[h5]$1[/h5]`);
rules.set(/^#### *(.*)/gm, `[h4]$1[/h4]`);
rules.set(/^### *(.*)/gm, `[h3]$1[/h3]`);
rules.set(/^## *(.*)/gm, `[h2]$1[/h2]`);
rules.set(/^# *(.*)/gm, `[h1]$1[/h1]`);
// formatting
rules.set(/\*\*(.*)\*\*/g, `[b]$1[/b]`);
rules.set(/\_\_(.*)\_\_/g, `[b]$1[/b]`);
rules.set(/\*(.*)\*/g, `[i]$1[/i]`);
rules.set(/\_(.*)\_/g, `[i]$1[/i]`);
rules.set(/~~(.*)~~/g, `[strike]$1[/strike]`);
// rules
rules.set(/^---/gm, `[hr][/hr]`);
rules.set(/^\*\*\*/gm, `[hr][/hr]`);
rules.set(/^___/gm, `[hr][/hr]`);
// links
rules.set(/\[([^\]]+)\]\(([^)]+)\)/g, `[url=$1]$2[/url]`);
// code
rules.set(/```([^`]+)```/g, `[code]$1[/code]`);
rules.set(/``([^`]+)``/g, `[code]$1[/code]`);
rules.set(/`([^`]+)`/g, `[code]$1[/code]`);
rules.set(/\n\[\/code\]/g, `[/code]`);
// quotes
rules.set(/^ *> *(.*)/gm, `[quote]$1[/quote]`);
rules.set(/\[\/quote\] *\n\[quote\]/g, `\n`);
// unordered lists
rules.set(/^ *- *(.*)/gm, `[list][*] $1[/list]`);
rules.set(/^ *\* *(.*)/gm, `[list][*] $1[/list]`);
rules.set(/^ *\+ *(.*)/gm, `[list][*] $1[/list]`);
rules.set(/\[\/list\] *\n\[list\]/g, `\n`);
// ordered lists
rules.set(/^ *\d+\. *(.*)/gm, `[olist][*] $1[/olist]`);
rules.set(/\[\/olist\] *\n\[olist\]/g, `\n`);

$("#input").on("input", function () {
    let text = $(this).val();
    while (true) {
        let replaced = replaceAll(text);
        if (replaced === text)
            break;
        text = replaced;
    }
    $("#output").val(text);
});

function replaceAll(text) {
    for (let [k, v] of rules.entries())
        text = text.replace(k, v);
    return text;
}