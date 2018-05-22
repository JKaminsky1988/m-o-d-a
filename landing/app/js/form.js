// textarea height
$('.user_comment_bl').on('change keyup keydown paste cut', 'textarea', function() {
    $(this).height(0).height(this.scrollHeight);
}).find('textarea').change();

// phone mask
$(document).ready(function() {
    $(".user_phone").inputmask({
        mask: "+38(099) 999-99-99",
        showMaskOnHover: false,
        showMaskOnFocus: true,
    });

});