async function translateText() {
    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    if (text === "") {
        alert("Please enter text");
        return;
    }

    try {
        let response = await fetch("https://api.mymemory.translated.net/get?q=" 
            + encodeURIComponent(text) + "&langpair=" + source + "|" + target);

        let data = await response.json();

        document.getElementById("outputText").innerText =
            data.responseData.translatedText;

    } catch (error) {
        console.log(error);
        document.getElementById("outputText").innerText =
            "Error in translation!";
    }
}

function copyText() {
    let text = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}