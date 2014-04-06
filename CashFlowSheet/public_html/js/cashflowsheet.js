function createView() {
    var adding = function() {
        $(this).parent().children(":last-child").after(
                "<div class=\"item\"><input type=\"text\" /><input type=\"number\" step=\"10\" /></div>");
    };
    
    var removing = function() {
        $items = $(this).parent().children("div");
        $items[$items.size() - 1].remove();
    };
    
    $addingButtons = $("input.addingContents");
    jQuery.each($addingButtons, function() {
       $(this).bind("click", adding);
    });
    
    $removingButtons = $("input.removingContents");
    jQuery.each($removingButtons, function() {
       $(this).bind("click", removing);
    });
    
}

function calculate() {
    var allIncome = 0;
    var $incomeList = $("#income").find("input[type=number]");
    jQuery.each($incomeList, function() {
        allIncome = allIncome + parseInt($(this).val());
    });
    $("#allIncome").val(allIncome);

    var allOutgo = 0;
    var $outgoList = $("#outgo").find("input[type=number]");
    jQuery.each($outgoList, function() {
        allOutgo = allOutgo + parseInt($(this).val());
    });
    $("#allOutgo").val(allOutgo);
}

function init() {
    createView();
    
    $("#income").bind("change", function() {
        calculate();
    });
    
    $("#outgo").bind("change", function() {
        calculate();
    });
}
