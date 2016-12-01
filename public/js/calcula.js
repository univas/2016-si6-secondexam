var bt = document.getElementById('calc')
bt.onclick = function() {
    let status = getStatus()
    if (number) {
        getData(status)
    } else {
        console.log("Status não aprovado")
    }
}

function getStatus() {
    let input = document.getElementById('status')
    return parseFloat(input.value)
} 

function getData(status) {
    $.ajax({
        method: 'GET',
        url: '/calcula?status' + status
    }) .done(data => {
            printData(data);
        });
}

function printData(data) {
    printID (data.id.toFixed(2))
    printName (name.id.toFixed(2))
    printEmail (name.id.toFixed(2))
}

function printID() {
    var span = document.getElementById('id')
    span.innerHTML = id
}

function printName() {
    var span = document.getElementById('name')
    span.innerHTML = name
}

function printEmail() {
    var span = document.getElementById('email')
    span.innerHTML = email
}






