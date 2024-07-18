$(function () {
    const form = $('#form');
    const answer = $('#answer');
    const checkbox = $('#checkbox');
    const btnSubmit = $('#submit');

    form.validate({
        wrapper: "li",
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true },
        },
        messages: {
            name: { required: 'Field cannot be empty' },
            email: { required: 'Field cannot be empty', email: 'Format: name@example.com' },
            message: { required: 'Field cannot be empty' },
        },
        submitHandler: ajaxFormSubmit
    });

    function ajaxFormSubmit() {
        const string = form.serialize();

        $.ajax({
            type: 'POST',
            url: '../php/mail.php',
            data: string,
            success: function (html) {
                form.slideUp(800);
                answer.html(html);
            }
        });

        return false;
    }

    function toggleSubmitButton() {
        if (form.valid() && checkbox.prop('checked')) {
            btnSubmit.removeClass('disabled').removeAttr('disabled');
        } else {
            btnSubmit.attr('disabled', 'disabled').addClass('disabled');
        }
    }

    checkbox.on('change', toggleSubmitButton);
    form.on('keyup change', 'input, textarea', toggleSubmitButton);
});