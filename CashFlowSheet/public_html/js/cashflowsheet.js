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
    
    $("#payCheck").bind("click", function() {
        $("#handMoney").val(parseInt($("#handMoney").val()) + parseInt($("#cashflow").val()));
    });
    
}

function calculate() {
    var allIncome = 0;
    var $incomeList = $("#income").find("input[type=number]");
    jQuery.each($incomeList, function() {
        if ($(this).val()) {
            allIncome = allIncome + parseInt($(this).val());
        }
    });
    $("#allIncome").val(allIncome);

    var allOutgo = 0;
    var $outgoList = $("#outgo").find("input[type=number]");
    jQuery.each($outgoList, function() {
        if ($(this).val()) {
            allOutgo = allOutgo + parseInt($(this).val());
        }
    });
    $("#allOutgo").val(allOutgo);
    
    $("#nonWorkedIncome").val(allIncome - parseInt($("#salary").val()));
    
    $("#cashflow").val(allIncome - allOutgo);
}

function init() {
    createView();
    $("#handMoney").val(0);
    $("#income").bind("change", function() {
        calculate();
    });
    
    $("#outgo").bind("change", function() {
        calculate();
    });
}

