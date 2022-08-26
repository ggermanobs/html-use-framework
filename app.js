function resquestOfServer() {
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=testonly=OlaMundo"
    }).done(function (data) {
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('mananger-developer').innerHTML = data.mananger_developer
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')
    });
}