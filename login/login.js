$(document).ready(() => {
    $('form').submit((e) => {
        $('#listError').html('');
        let arrayOfErrors = [];
        e.preventDefault();
        if(!$('#pwd').val())
           arrayOfErrors.push('Senha não digitada.');

        if(!$('#user').val())
            arrayOfErrors.push('Usuário não digitado.');

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
            url: 'http://localhost:5000/usuario/getUsuario',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({usuario: $('#user').val(),
                                senha:$('#pwd').val(),
                            }),
            sucess: test => {
                console.log(test);
            }
        }).done(function(data){
            localStorage.setItem('token',JSON.stringify(data));
            window.location = 'http://localhost:5500/index.html';
        }).fail(function(){
            const li = document.createElement('li');
            $(li).addClass('list-group-item list-group-item-danger');
            $(li).text('Usuario ou senhas incorretas');
            $('#listError').append(li);
        })
    })
})