function init() {
    var adding = function() {
        var itemContainer = document.createElement("div");
        var itemName = document.createElement("input");
        var itemSumOfMoney = document.createElement("input");
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemSumOfMoney);
        
        this.parentNode.appendChild(itemContainer);
    };
    
    var removing = function() {
        if (this.parentNode.lastChild.nodeType === Node.TEXT_NODE) {
            this.parentNode.removeChild(this.parentNode.lastChild);  
            arguments.callee(this);
        } else if(this.parentNode.lastChild.nodeName === "DIV") {
            this.parentNode.removeChild(this.parentNode.lastChild);  
        }
    };
    
    var addingButtonElements = document.getElementsByClassName("addingContents");
    for (var i = 0; i < addingButtonElements.length; i++) {
        addingButtonElements[i].onclick = adding;
    }
    
    var removingButtonElements = document.getElementsByClassName("removingContents");
    for (var i = 0; i < removingButtonElements.length; i++) {
        removingButtonElements[i].onclick = removing;
    }
}