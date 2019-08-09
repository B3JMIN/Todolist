$("input").click(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $("input").val("");
});

// First bug how to show "" when cli
// var $input  = $("input")
// var $inputclicked;

// var $inputClicked;
// $("input").click(function(){
//    $inputClicked = true;
// });
// if( $inputClicked != true ) {
//     $input.val("what happen");
//     console.log("!!!")
// }else{
//     $input.val("!!!");
//     console.log("bad thing")
// }
$("#addBtn").keypress(function (e) { 
    if (e.which === 13){
        $("#addBtn").click();
        console.log("you have pressed the enter key.")
    }
});
var checkBtn = $('#check')
var $list = $('ul');
var newtask = 
// $("#addBtn").click(function (e) { 
//     e.preventDefault();
//     var task;
//     task = $("input").val()
//     $list.append("<li>""<input type='checkbox'" +
//                 "name = u"
//     "</li>"

//     )
    

//     console.log(task);
// });
// $("#addBtn").keypress(function (e) { 
//     if (e.which === 13){
//         $("#addBtn").click();
//         console.log("you have pressed the enter key.")
//     }
// });

//  what to do next is change the output of entering
//  what entered gonna become a div with a button undo 
//  in front of each can be changed, and the text will become inlined
//  then it gonna move to the css style 


$(function addToDoList(){
    var $newTask = $("#todo").val();
    $("#todo").append("<li>" +
                   "<input type='checkbox' name='checkbox' id='checkbox'>" +
                   "value=" + $newTask + "' />" + $newTask + 
                   "<button id='undo'>Delete</button>" + 
                   "</li>");
    $("#todo").val("");
    console.log($newTask);
});
// $(function deleteDoToList(){
//     var 
// });


$(function(){
    $("#addBtn").on('click', function(e){
        e.preventDefault();
        addToDoList();
    });
    
});

