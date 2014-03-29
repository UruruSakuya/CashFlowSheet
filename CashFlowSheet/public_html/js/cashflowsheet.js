function init() {
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