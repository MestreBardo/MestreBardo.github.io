$(document).ready(() => {
    $('form').submit((e) => {
        $('#listError').html('');
        let arrayOfErrors = [];
        e.preventDefault();
        if(!$('#pwd').val())
           arrayOfErrors.push('Senha não digitada.');

        if(!$('#pwdRepeat').val())
            arrayOfErrors.push('Confirmação de senha não digitada.');

        if(!$('#user').val())
            arrayOfErrors.push('Usuário não digitado.');

        if(!$('#email').val())
            arrayOfErrors.push('Email não digitado.');

        if($('#pwd').val() != $('#pwdRepeat').val())
            arrayOfErrors.push('Senhas não coincidem.');

        if(arrayOfErrors.length > 0){
            arrayOfErrors.forEach(error => {
                const li = document.createElement('li');
                $(li).addClass('list-group-item list-group-item-danger');
                $(li).text(error);
                $('#listError').append(li);
            })
            return;
        }
        $.ajax({
            url: 'http://localhost:5000/usuario/setUsuario',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({usuario: $('#user').val(),
                                senha:$('#pwdRepeat').val(),
                                email:$('#email').val()
                            }),
            sucess: test => {
                console.log(test);
            }
        }).done(function(data){
            localStorage.setItem('token',JSON.stringify(data));
            window.location = 'http://localhost:5500/index.html';
        })
    })
})