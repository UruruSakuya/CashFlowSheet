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

var Calculater = function () {
	// HTML object
	var displayCalc = $("#calc > div.displayCalc > input")[0];
	var operaterStatus= "";
	var calculatedNumber = 0;
	
	$("#calc > div.typeCalc > input[name=one]").bind("click", function() {
        // $("#calc > div.displayCalc > input").val(1);
      if (displayCalc.value === 0) {
		  displayCalc.value = 1;
		  alert(displayCalc);
		  
	  } else {
		  calculatedNumber = 1;
	  }
	});
	
	$("#calc > div.typeCalc > input[name=one]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=two]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=three]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=four]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=five]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=six]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=seven]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=eight]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=nine]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=plus]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=minus]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=multiple]").bind("click", function() {
    });
	
	$("#calc > div.typeCalc > input[name=equal]").bind("click", function() {
		if (operaterStatus !== "") {
			switch (operaterStatus) {
				case "plus":
				
			}
		}
    });
};

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
    var $targetOfMenus = $("#summary, #income, #outgo, #calc");
    
    // 0 = サマリー
    // 1 = 収入
    // 2 = 支出
    // 3 = 電卓
    var i = 0;
    jQuery.each($menus, function() {
        switch (i) {
            case 0:
                $(this).bind("click", function() {
                    jQuery.each($targetOfMenus, function() {
                        $(this).fadeOut(0);
                    });
                    
                    $($targetOfMenus[0]).fadeIn(0);
                });
                
                break;

            case 1:
                $(this).bind("click", function() {
                    jQuery.each($targetOfMenus, function() {
                        $(this).fadeOut(0);
                    });
                    
                    $($targetOfMenus[1]).fadeIn(0);
                });
                
                break;

            case 2:
                $(this).bind("click", function() {
                    jQuery.each($targetOfMenus, function() {
                        $(this).fadeOut(0);
                    });
                    
                    $($targetOfMenus[2]).fadeIn(0);
                });
                
                break;

            case 3:
                $(this).bind("click", function() {
                    jQuery.each($targetOfMenus, function() {
                        $(this).fadeOut(0);
                    });
                    
                    $($targetOfMenus[3]).fadeIn(0);
                });
                
                break;
        }
        i++;
    });

    $("section.modal").find("p.close").bind("click", function() {
        $(this).parent("section").fadeOut(0);
    });
	
	var calc = new Calculater();
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

    $("#summary").fadeIn(0);
}

