/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global value */

function disableInput(status) {
    if (status === true) {
        document.getElementById('title').readonly = true;
        document.getElementById('author').readonly = true;
        document.getElementById('tag').readonly = true;
        document.getElementById('language').readonly = true;
        document.getElementById('description').readonly = true;
    } else {
        document.getElementById('title').readonly = false;
        document.getElementById('author').readonly = false;
        document.getElementById('tag').readonly = false;
        document.getElementById('language').readonly = false;
        document.getElementById('description').readonly = false;
    }
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('tag').value = "";
    document.getElementById('language').value = "";
    document.getElementById('description').value = "";
}

document.getElementById("isbn").addEventListener("change", function () {
    setTimeout(function () {
        $.ajax({
            url: 'CheckBookExist',
            data: {isbn: document.getElementById("isbn").value},
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function (data) {
                console.log(data.author);
                disableInput(true);
                if (data !== 'empty') {
                    document.getElementById('title').value = data.title;
                    document.getElementById('author').value = data.author;
                    document.getElementById('tag').value = data.tag;
                    document.getElementById('language').value = data.language;
                    document.getElementById('description').value = data.description;
                } else {
                    disableInput(false);
                }
            },
            error: function () {
                alert('error');
            }
        });
    }, 0);
});
