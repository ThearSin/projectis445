document.querySelector('newtab')
    .addEventListener('click', () => {
        window.location.href = ''
    });
    $("#form-new-contact").on("submit", (event) => {
		event.preventDefault();
		const $Name = $("#name").val(),
			$email = $("#email").val(),
			$phone = $("#phone").val();
			
		new Contact($Name, $email, $phone);
		$("#name").select();
		
	});