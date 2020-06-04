//check off specific todos while clicking
$('ul').on('click','li', function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$('ul').on('click','span', function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input:text").keypress(function (e) { 
    if (e.which === 13) {
        //grabbing new todo text from user input
        var todoText = $(this).val();
        $(this).val("");
        //create a new LI and add to UL
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function () { 
    $("input:text").fadeToggle();
    
});