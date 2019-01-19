$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on('click','span',function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
			});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	if (event.which === 13) { var todoText = $(this).val();
		if (todoText!=""){
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText+"</li>")}
		else{
			alert("please give valid to do");
		}

	}

});
$(".fa-plus").click(function(){
$("input[type='text'").fadeToggle(100);

});