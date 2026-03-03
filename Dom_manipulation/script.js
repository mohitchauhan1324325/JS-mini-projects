function addText() {
    let str = document.querySelector("#text").value;

    if (str == "") {
        return;
    }
    else {
        document.querySelector("#para").innerText = str;
    }
    document.querySelector("#text").value = "";
}

function addColor() {
    let color = document.querySelector("#color").value;
    document.querySelector("#para").style.color = color;
}

