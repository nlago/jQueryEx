var count = 0;
$('#counter').text('('+count+')');

//mark an item as 'Done'

$( "#todo-list" ).on("click", "li", function() {
var itemname = $(this).text();
$('#done-list')
       .append($('<li>'+itemname+'</li>'));

console.log(itemname);
$(this).remove();
count--;
$('#counter').text('('+count+')');
});


//add to TODO

$( "#addbtn" ).click(function() {
var newitemname = $("#addtext").val();
if(newitemname!=""){
console.log(newitemname);
count++;
$('#todo-list')
       .append($('<li>'+newitemname+'</li>'));
	   $("#addtext").val("");
$('#counter').text('('+count+')');
}

else {
	
	htmlStr = "";

	htmlStr += "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">";

	htmlStr += "<strong>Error:</strong> Please enter an item name!";

	htmlStr += "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">";

	htmlStr += "<span aria-hidden=\"true\">&times;</span>";

	htmlStr += "</button>";

	htmlStr += "</div>";

	$('#feedback').html(htmlStr);
	
	$(" #feedback .alert").delay(2000).slideUp(500, function(){
    $(" #feedback .alert").alert('close');
});
}
});


//remove a 'Done' item

$( "#done-list" ).on("click", "li", function() {
var itemname = $(this).text();
$('#todo-list')
       .append($('<li>'+itemname+'</li>'));

console.log(itemname);
$(this).remove();
count++;
$('#counter').text('('+count+')');
});