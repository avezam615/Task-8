jQuery(document).ready(function(){
    $('#button').click(function(){ 
        var value = $('#text').val(); //Gets the input value
        if(value == ''){ //If it's empty perform alert
            alert('You have not input text');
        }else{ //Otherwise prepend new paragraph with input value inside
            var newParagraph = "<p>" + value + "</p>"
            $('#tasks').prepend(newParagraph);
        }
    });
});
