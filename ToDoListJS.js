// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("gray");
});

//Click on X to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(250, function(){
        $(this).remove();
    })
    e.stopPropagation();
});

//Adding ToDo items
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        if(todoText.length != 0){
            console.log(todoText.length);
            $(this).val("");
            //Create a new li
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});