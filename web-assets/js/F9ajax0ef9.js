var timeout = false;
function CheckTimeOut() {
    if(timeout == false){
        timeout = true;
        setTimeout(() => {
            timeout = false;
        }, 1500);
        return true;
    }else{
        return false;
    }
}

function ChangeLang(lang) {
	var xmlhttp;
	if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 & xmlhttp.status == 200){
            if(xmlhttp.responseText == 'spam'){
                swal({
                    title: "[ANITSPAM]",
                    text: "الرجاء الانتظار بين محاولاتك",
                    type: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'اغلاق',
                })
            }
        }
    }
    xmlhttp.open("POST","/web-assets/hidden/ajax.php", true);
    xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('ChangeLang=1&newlang='+lang);
}
    
function ChangeDarkMode(tpx) {
	var xmlhttp;
	if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 & xmlhttp.status == 200){
            if(xmlhttp.responseText == 'spam'){
                swal({
                    title: "[ANITSPAM]",
                    text: "الرجاء الانتظار بين محاولاتك",
                    type: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'اغلاق',
                })
            }
        }
        setTimeout(function(){
            location.reload(1);
        }, 600);
    }
    xmlhttp.open("POST","/web-assets/hidden/ajax.php", true);
    xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('ChangeDMode=1&nnew='+tpx);
}


function SendSubscribe() {
    var xmlhttp;
    var emailtosub = $("#emailtosub").val();
    
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            if(xmlhttp.responseText == 'maintenance'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[17],
                    icon: "warning",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'emp'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[4],
                    icon: "warning",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'spam'){
                Swal.fire({
                    title: wnotifications[0],
                    text: wnotifications[1],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'max'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[11],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'disc'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[13],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
                setTimeout(function(){
                    location.reload(1);
                }, 1400);
            }
            if(xmlhttp.responseText == 'error'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[5],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
                setTimeout(function(){
                    location.reload(1);
                }, 1400);
            }
            if(xmlhttp.responseText == 'sub'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[10],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'done'){
                 Swal.fire({
                    title: wnotifications[3],
                    text: wnotifications[6],
                    icon: "success",
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                 });
                setTimeout(function(){
                    $("#emailtosub").val('');
                }, 100);
            }
        }
    }

    xmlhttp.open("POST","/web-assets/hidden/ajax.php", true);
    xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('subscribebyemail=1&email='+emailtosub);

}


function SendContact() {
    var xmlhttp;
    var fullname = $("#cfullname").val();
    var email = $("#cemail").val();
    var number = $("#cnumber").val();
    var subject = $("#csubject").val();
    var message = $("#cmessage").val();
    var cabout = $("#cabout").find(":selected").val();
    
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            if(xmlhttp.responseText == 'maintenance'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[17],
                    icon: "warning",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'emp'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[4],
                    icon: "warning",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'spam'){
                Swal.fire({
                    title: wnotifications[0],
                    text: wnotifications[1],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'disc'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[13],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
                setTimeout(function(){
                    location.reload(1);
                }, 1400);
            }
            if(xmlhttp.responseText == 'about'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[12],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'max'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[11],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
            }
            if(xmlhttp.responseText == 'error'){
                Swal.fire({
                    title: wnotifications[2],
                    text: wnotifications[5],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                })
                setTimeout(function(){
                    location.reload(1);
                }, 1500);
            }
            if(xmlhttp.responseText == 'done'){
                 Swal.fire({
                    title: wnotifications[3],
                    text: wnotifications[6],
                    icon: "success",
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                 });
                setTimeout(function(){
                    $("#cfullname").val('');
                    $("#cemail").val('');
                    $("#cnumber").val('');
                    $("#csubject").val('');
                    $("#cmessage").val('');
                }, 100);
            }
        }
    }

    xmlhttp.open("POST","/web-assets/hidden/ajax.php", true);
    xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('Sendcontact=1&fullname='+fullname+'&email='+email+'&number='+number+'&cabout='+cabout+'&subject='+subject+'&message='+message);

}

function SendApp() {
    if(CheckTimeOut()){
        var xmlhttp;
        var gccc = 'false';
        var wooo = 'false';
        var afullname = $("#afullname").val();
        var adate = $("#adate").val();
        var aemail = $("#aemail").val();
        var aphone = $("#aphone").val();
        var aadress = $("#aadress").val();
        var asocila = $("#asocila").val();
        var apwebsite = $("#apwebsite").val();
        var aexp = $("#aexp").find(":selected").val();
        var aexpecteds = $("#aexpecteds").val();
        if ($('#toggle-0').is(":checked") == true){
            gccc = 'true';
        }
        if ($('#toggle-1').is(":checked") == true){
            wooo = 'true';
        }
        var awhywork = $("#awhywork").val();
        var aacv = $("#aacv").val();
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 & this.status == 200){
                if(xmlhttp.responseText == 'maintenance'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[17],
                        icon: "warning",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    })
                }
                if(xmlhttp.responseText == 'emp'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[4],
                        icon: "warning",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    })
                }
                if(this.responseText == 'spam'){
                    Swal.fire({
                    title: wnotifications[0],
                    text: wnotifications[1],
                    icon: "error",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: true,
                    showCancelButton: false,
                    button: wnotifications[7],
                    confirmButtonText: wnotifications[7],
                    confirmButtonColor: '#E52C3E',
                    });
                }
                if(xmlhttp.responseText == 'disc'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[13],
                        icon: "error",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    })
                    setTimeout(function(){
                        location.reload(1);
                    }, 1400);
                }
                if(xmlhttp.responseText == 'max'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[11],
                        icon: "error",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    })
                }
                if(xmlhttp.responseText == 'old'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[19],
                        icon: "info",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    })
                }
                if(this.responseText == 'error'){
                    Swal.fire({
                        title: wnotifications[2],
                        text: wnotifications[5],
                        icon: "error",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        showConfirmButton: true,
                        showCancelButton: false,
                        button: wnotifications[7],
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    });
                    setTimeout(function(){
                        location.reload(1);
                    }, 1800);
                }
                if(this.responseText == 'done'){
                    Swal.fire({
                        title: wnotifications[3],
                        text: wnotifications[14],
                        icon: "success",
                        confirmButtonText: wnotifications[7],
                        confirmButtonColor: '#E52C3E',
                    });
                    setTimeout(function(){
                        $("#afullname").val('');
                        $("#adate").val('');
                        $("#aemail").val('');
                        $("#aphone").val('');
                        $("#aadress").val('');
                        $("#asocila").val('');
                        $("#apwebsite").val('');
                        $("#aexpecteds").val('');
                        $("#awhywork").val('');
                        $("#aacv").val('');
                    }, 500);
                }
            }
        }
        xmlhttp.open("POST","/web-assets/hidden/ajax.php", true);
        xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send('ApplyForTeam=1&afullname='+afullname+'&adate='+adate+'&aemail='+aemail+'&aphone='+aphone+'&aadress='+aadress+'&asocila='+asocila+'&apwebsite='+apwebsite+'&aexp='+aexp+'&aexpecteds='+aexpecteds+'&gccc='+gccc+'&wooo='+wooo+'&awhywork='+awhywork+'&aacv='+aacv);
    }
}