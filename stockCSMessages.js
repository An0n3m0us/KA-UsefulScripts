function createMessage(text) {
    message = document.createElement("p");
    message.style = "margin: 22px;font-size: 18px;border: solid 2px powderblue;border-radius: 5px;padding: 5px;";
    message.innerText = text;
    messagesContainer.appendChild(message);
}

$.getJSON("https://raw.githubusercontent.com/An0n3m0us/KA-UsefulScripts/master/stockCSMessages/exampleList.json", function(apidata) {

    stockMessagesContainer = document.createElement("div");
    stockMessagesContainer.style = "position: fixed; bottom: 0px; left: 0px;width: 35%;height: 45%;background-color: #f0f8ffd6;overflow-y: scroll;font-size: 18px;";

    /**
    // Menu for different message lists

    listSelectorContainer = document.createElement("div");
    listSelectorContainer.style = "margin: 10px;";

    listButton0 = document.createElement("a");
    listButton0.style = "border: solid 2px;padding: 5px;border-radius: 5px;display: inline-block;";
    listButton0.href = "javascript:void(0)";
    listButton0.innerText = "list0";

    **/

    messagesContainer = document.createElement("div");
    messagesContainer.style = "width: 100%; height: 100%;";

    // Create the messages
    apidata["list0"].forEach(function(index){
        createMessage(index);
    });

    // Using messages from list1 for demonstration purposes
    apidata["list1"].forEach(function(index){
        createMessage(index);
    });

    stockMessagesContainer.appendChild(messagesContainer);
    document.body.appendChild(stockMessagesContainer);
});
