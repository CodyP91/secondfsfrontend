$(document).ready(function() {
    // When the signup form is submitted
    $("#signup-form").on('submit', function(e) {
        e.preventDefault();

        // Perform AJAX request to the Flask server
        $.ajax({
            url: '/api/client',
            method: 'POST',
            data: {
                username: $('#username').val(),
                email: $('#email').val(),
                password: $('#password').val(),
                image_url: $('#image_url').val()
            },
            success: function(data) {
                console.log('Signed up successfully.');
                // Here you might want to transition to the profile page or something else
            },
            error: function() {
                console.log('Signup failed.');
            }
        });
    });

    // Similar AJAX calls for login form submission
});
