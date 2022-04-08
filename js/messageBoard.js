window.onload = function () {

    let messageBox = document.getElementById("messageBox");
    let input = document.getElementById("input");
    let postButton = document.getElementById("post");

    postButton.onclick = function () {
        if (input.value) {
            let time = document.createElement("div");
            time.className = "time";
            let myDate = new Date();
            time.innerHTML = myDate.toLocaleString();
            messageBox.appendChild(time);

            let oMessageContent = document.createElement("div");
            oMessageContent.className = "message_content";
            oMessageContent.innerHTML = input.value;
            input.value = "";
            messageBox.appendChild(oMessageContent);
        }

    }

}
