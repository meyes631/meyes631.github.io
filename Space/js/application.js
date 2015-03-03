$('.door').click(function() {
    var target = $(this).data('target');
    $(target).removeClass('hidden');
});