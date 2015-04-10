$('.letter').hover(function() {
    // mouse in
    $(this).addClass('show');
}, function() {
    // mouse out
    var keep = $(this).data('keep');
    
    if (!keep) {
        $(this).removeClass('show');
    }
    
});