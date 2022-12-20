$(document).ready(function() {
    $('.menu-hamburguer').click( function() {
        $('main').slideToggle()
    })

    $('#slide-carousel').slick({
        autoplay: true,
        arrows: false
    })

    $('#campo-cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#campo-cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('#campo-telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo'
        },
        submitHandler: function(form) {
            //mensagens de conclusão do formulário
            alert('FELIZ NATAL!! Entraremos em contato.')
            $(`<div class="return-message">&#x1F385; FELIZ NATAL!!!</div>`).appendTo('body') 
            
            setTimeout(() => form.submit(), 5000) //Esperar 5s antes de realizar o submit do formulário
        
        },
        invalidHandler: function(event, validador) {
            let camposIcorretos = validador.numberOfInvalids()
            if (camposIcorretos) {
                alert(`Existem ${camposIcorretos} campos incorretos`)
            }
        }
    })
})