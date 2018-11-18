function submitPhone() {
    var phoneNumber = $("#phone").val();
    var phoneNumberType = checkPhoneNumber(phoneNumber);
    switch (phoneNumberType) {
        case 'MCI':
            $("#submit-phone-step").hide();
            $("#submit-code-step").hide();
            $("#send-again").hide();
            $("#loading").fadeIn(1e3);
            subscribe(chainId, serviceId, phoneNumber, "35", subscribeDone);
            break;
        case 'NOT-MCI':
            window.location.href = serviceUrl;
            break
    }
}

function submitCode() {
    var phoneNumber = $("#phone").val();
    var code = $("#code").val();
    if(checkCode(code)) {
        $("#submit-code-step").hide();
        $("#loading").fadeIn(1e3);
        console.log('Show loading!');
        otpConfirm(chainId, serviceId, phoneNumber, "35", code, confirmDone)
    }
}

function subscribeDone(data) {
    console.log(data.status == '200');
    if(data.status == '200') {
        console.log('Subscribe successful!');
        $(".phone-input").hide();
        $(".send-again").hide();
        $("#submit-code-step").fadeIn(1e3);
        setCounter();
    } else {
        alert("ارسال کد با مشکل مواجه شد");
        $("#phone").val('');
        $("#submit-phone-step").fadeIn(1e3);
    }
    $("#loading").hide();
    console.log('Hide loading');
}

function confirmDone(data) {
    if(data.status.toString() === '200') {
        console.log('Confirm successful!');
        window.location.href = "success?chId=" + chainId;
    } else {
        alert("ارسال کد با مشکل مواجه شد");
        $("#code").val('');
        $("#submit-code-step").fadeIn(1e3);
        console.log('Confirm failure!');
    }
    $("#loading").hide();
    console.log('Hide loading');
}

function setCounter() {
    $("#counter").html(60);
    var counter = setInterval(
        function() {
            var count = parseInt($("#counter").html())-1;
            $("#counter").html(count);
            if(count === 0) {
                clearInterval(counter);
                $("#counter").html("<b>اگر هنوز کد را دریافت نکردید روی دکمه ارسال دوباره کلیک کنید</b>");
                $("#send-again").fadeIn(1e3);
            }
        }, 1e3)
}

function checkPhoneNumber(phoneNumber) {
    var mciPrefix = ['0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0990', '0991'];

    if(isNaN(phoneNumber) || phoneNumber == '')
        alert("تلفن همراه باید به شکل عدد وارد شود");
    else {
        if(phoneNumber.length === 11) {
            console.log(phoneNumber.substr(0, 1));
            if(phoneNumber.substr(0, 2) === "09") {
                phoneNumberPrefix = phoneNumber.substr(0, 4);
                if (mciPrefix.indexOf(phoneNumberPrefix) != -1) {
                    return 'MCI';
                } else {
                    return 'NOT-MCI';
                }
            } else
                alert("تلفن همراه باید با 09 شروع شود")
        } else
            alert("تلفن همراه باید ۱۱ رقمی باشد")
    }
    return false
}

function checkCode(code) {
    if(isNaN(code) || code === '' || code.length !== 4)
        alert("کد وارد شده باید یک عدد ۴ رقمی باشد!");
    else {
        return true;

    }
    return false
}

$("#phone").keyup(
    function () {
        if($(this).val().length === 11)
            $(this).addClass("active");
        else
            $(this).removeClass("active");
    }
);

$("#code").keyup(
    function () {
        if($(this).val().length === 4)
            $(this).addClass("active");
        else
            $(this).removeClass("active");
    }
);