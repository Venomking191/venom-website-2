$('#loginaccessBlock').click(function(){
    $(".loginblockcontinar").css("display", "flex");
});
$('#closeloginBlock').click(function(){
    $(".loginblockcontinar").css("display", "none");
});

function SignInwithCode(){
    Swal.fire({
        title: lnotifications[1],
        text: lnotifications[2],
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        confirmButtonText: lnotifications[3],
        cancelButtonText: lnotifications[4],
        confirmButtonColor: '#E52C3E',
    }).then((result) => {
        if (result.value) {
        var Verificationcode = $("#loginCode").val();
        $.ajax({
            type: "POST",
            url: "/landingpage/ajax",
            data:'SignInwithCode='+Verificationcode+'&token=bMt1XAFGgKqlgTAlXJJEQ0hN33fQoI2FSmyy9ZqC',
            dataType:'json',
            success : function(response)
            {
                if(response.timeout == true){
                    Swal.fire({
                        title: lnotifications[5],
                        text: lnotifications[7],
                        icon: "error"
                    });
                }else if(response.success == true){

                    Swal.fire({
                        title: lnotifications[8],
                        input: "text",
                        inputAttributes: {
                            autocapitalize: "off"
                        },
                        showCancelButton: true,
                        confirmButtonText: lnotifications[9],
                        cancelButtonText: lnotifications[12],
                        showLoaderOnConfirm: true,
                        confirmButtonColor: '#E52C3E',
                        preConfirm: function(givenData){
                            return new Promise(function(resolve, reject) {
                                setTimeout(function(){
                                    return $.ajax({
                                        type: "POST",
                                        url: "/landingpage/ajax",
                                        data:'SendvCode='+givenData+'&token=bMt1XAFGgKqlgTAlXJJEQ0hN33fQoI2FSmyy9ZqC',
                                        dataType:'json',
                                        success : function(response)
                                        {
                                            if(response.success){
                                                Swal.fire({
                                                    title: lnotifications[6],
                                                    text: lnotifications[10],
                                                    icon: "success"
                                                });
                                                setTimeout(() => {
                                                    location.reload();
                                                }, 1500);
                                            }else{
                                                Swal.fire({
                                                    title: lnotifications[5],
                                                    text: lnotifications[11],
                                                    icon: "error"
                                                });
                                            }
                                        }
                                    });
                                }, 2500)
                            })
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    });
                }else{
                    Swal.fire({
                        title: lnotifications[5],
                        text: lnotifications[11],
                        icon: "error"
                    });
                }
            }
        });
        }
    });
}
