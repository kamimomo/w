$(document).ready(function(){
    var start_id = window.location.hash.substring(1);

    if (start_id == '') {
        start_id = 'Home';
    }
    click(start_id)

    $('.nav-toggle-menu').click(function() {
        $('.nav-menu').slideToggle("fast");
        $('.nav-link').slideToggle("fast");
    });
    
    $('.nav-menu a').click(function () {
        click(this.href.split('#')[1]);
    });
});

function click(id) {
    $('.nav-menu a').each(function () {
        
        if (this.href.split('#')[1] === id) {
            $(this).addClass('active')
        }
        else {
            $(this).removeClass('active')
        }
    });
    
    $('.content').each(function () {
        
        var contentId = this.id;

        
        if (contentId === id) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    }); 
}