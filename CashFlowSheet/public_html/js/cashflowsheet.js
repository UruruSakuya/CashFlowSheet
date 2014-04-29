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

    jQuery.each($("input[type=number]"), function() {
        $(this).val(parseInt($(this).val(), 10));
    });
}

function createView() {
    var adding = function() {
        $(this).parent().children(":last-child").after(
                "<div class=\"item\"><input type=\"text\" /><input type=\"number\" step=\"10\" /></div>");
    };

    var removing = function() {
        $items = $(this).parent().children("div");
        if ($items.size() !== 0) {
            $items[$items.size() - 1].remove();
        }
    };

    var $addingButtons = $("input.addingContents");
    jQuery.each($addingButtons, function() {
        $(this).bind("click", adding);
        $(this).bind("click", calculate);
    });

    var $removingButtons = $("input.removingContents");
    jQuery.each($removingButtons, function() {
        $(this).bind("click", removing);
        $(this).bind("click", calculate);
    });

    $("#payCheck").bind("click", function() {
        $("#handMoney").val(parseInt($("#handMoney").val()) + parseInt($("#cashflow").val()));
    });

    $("#payedHandMoney").bind("click", function() {
        $("#pay").fadeIn(0);
    });

    $("#lossedHandMoney").bind("click", function() {
        $("#loss").fadeIn(0);
    });

    $("#pay").find("input[type=button]").bind("click", function() {
        if ($(this).siblings("input[type=number]").val()) {
            $("#handMoney").val(parseInt($("#handMoney").val()) + parseInt($(this).siblings("input[type=number]").val()));
            $(this).siblings("input[type=number]").val(0);
            $("#pay").fadeOut(0);
        }
    });

    $("#loss").find("input[type=button]").bind("click", function() {
        if ($(this).siblings("input[type=number]").val()) {
            $("#handMoney").val(parseInt($("#handMoney").val()) - parseInt($(this).siblings("input[type=number]").val()));
            $(this).siblings("input[type=number]").val(0);
            $("#loss").fadeOut(0);
        }
    });

    var $menus = $(".menu");
    var $targetOfMenus = $("#summary, #income, #outgo");
    
    // 0 = サマリー
    // 1 = 収入
    // 2 = 支出
    var i = 0;
    jQuery.each($menus, function() {
        $(this).bind("click", function() {
            switch (i) {
                case 0:
                    $($targetOfMenus[0]).fadeIn(0);
                    $($targetOfMenus[1]).fadeOut(0);
                    $($targetOfMenus[2]).fadeOut(0);

                    break;
                case 1:
                    $($targetOfMenus[0]).fadeOut(0);
                    $($targetOfMenus[1]).fadeIn(0);
                    $($targetOfMenus[2]).fadeOut(0);;

                    break;
                case 2:
                    $($targetOfMenus[0]).fadeOut(0);
                    $($targetOfMenus[1]).fadeOut(0);
                    $($targetOfMenus[2]).fadeIn(0);
                    
                    break;
            }
            i++;
        });
    });

    $("section.modal").find("p.close").bind("click", function() {
        $(this).parent("section").fadeOut(0);
    });
}

function init() {
    createView();
    $("input[type=number]").val(0);
    $("#income").bind("change", function() {
        calculate();
    });

    $("#outgo").bind("change", function() {
        calculate();
    });
}

