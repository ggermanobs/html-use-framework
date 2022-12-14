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
    const nameOfUser = $("#name").val()
    const lasNameOfUser = $("#last_name").val()
    const ageOfUser = $("#age").val()      
    $.ajax({
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            name:nameOfUser,
            last_name:lasNameOfUser,
            age:ageOfUser
        }) 
    }).done(function (response) {
        
        if (response.success) { 
            
            closeSuccessMsgError()
            $("#success-record-msg").css('display','block')

            $("#name").val('')
            $("#last_name").val('')
            $("#age").val('')            
        } else { closeSuccessMsg() 
            let errorMsg;
            let errorWidth = '350px'

            if(response.missingAtribute ==='name'){
                errorMsg = 'O campo nome está ausente, fazer inserir'
                errorWidth = '415px'
            }

            if(response.missingAtribute ==='last_name'){
                errorMsg = 'O campo sobrenome está ausente, fazer inserir'
                errorWidth = '435px'
            }

            if(response.missingAtribute ==='age'){
                errorMsg = 'O campo idade está ausente, fazer inserir'
                errorWidth = '415px'
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