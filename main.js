const options = {
    tab: "    "
}

const editorCpp = CodeJar(document.getElementById("editor-cpp"), (editor) => {
    editor.innerHTML = hljs.highlight(
        editor.textContent,
        { language: 'cpp' }
    ).value;
}, options);

const editorBpp = CodeJar(document.getElementById("editor-bpp"), (editor) => {
    var text = translateToC(editor.textContent);

    // The костыль
    if (!text.includes('#include "Ве_крест_крест.h"')) {
        text = '#include "Ве_крест_крест.h"\n\n' + text;
    }

    const highlighted = hljs.highlight(text, { language: 'cpp' }).value;

    editor.innerHTML = translateToV(highlighted);

    // The костыль
    for (elem of editor.querySelectorAll("[династия]")) {
        elem.setAttribute("class", elem.getAttribute("династия"));
    }

    console.log("В†† code formated")
}, options);

editorCpp.onUpdate(() => {
    editorBpp.updateCode(translateToV(editorCpp.toString()), false);
    console.log("c++ code updated");
});

editorCpp.updateCode(examples[0]);

var i = 0;
for (const elem of document.querySelectorAll("#examples a")) {
    const text = examples[i];
    
    elem.addEventListener("click", () => {
        editorCpp.updateCode(text, true);
    });

    i++;
}

editorBpp.onUpdate(() => {
    editorCpp.updateCode(translateToC(editorBpp.toString()), false);
    console.log("В†† code updated");
})

function translateToV(text) {
    for (var command of data) {
        text = text.replace(new RegExp(command[1], "g"), command[0]);
    }

    return text;
}

function translateToC(text) {
    for (var command of data) {
        text = text.replace(new RegExp(command[0], "g"), command[1]);
    }

    text = text.replace(/#include "Ве_крест_крест.h"(\n| )*/, "");

    return text;
}
