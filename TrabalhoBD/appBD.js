let a =1
let b =2*a

function requestOfServer() {

    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=OlaMundo"
    }).done(function(data) { 
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')

    });

}

function submitDataOfUser() {
    const nomeCarro = $("#carName").val()
    const modelo = $("#model").val()
    
    $.ajax({
        "url": "http://localhost:8000/car-insert",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            carName:nomeCarro,
            model:modelo  
        }) 
    }).done(function (response) {
        
        if (response.success) { 
            
            closeSuccessMsgError()
            $("#success-record-msg").css('display','block')

            $("#carName").val('')
            $("#model").val('')
                  
        } else { closeSuccessMsg() 
            let errorMsg;
            let errorWidth = '350px'

            if(response.missingAtribute ==='carName'){
                errorMsg = 'O campo nome do carro está ausente, favor inserir'
                errorWidth = '415px'
            }

            if(response.missingAtribute ==='model'){
                errorMsg = 'O campo modelo do carro está ausente, favor inserir'
                errorWidth = '435px'
            }



            console.log(response)
            $("#error-record-msg").css('display' , 'block')
            $("#content-error-record-msg").html(errorMsg)
            

        }

    });
}


function closeSuccessMsg() {
    /* Jquery */
    $("#success-record-msg").css('display', 'none')

    /* vanila */
    // document.getElementById('success-record-msg').style.display = 'none'
}

function closeSuccessMsgError() {
    $("#error-record-msg").css('display' , 'none')
}