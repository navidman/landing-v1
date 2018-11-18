const baseUrl = "/c/services/";

var opt_id = '';

function subscribe(chainId, serviceId, phoneNumber, landingId, callback) {
    console.log('SUBSCRIBE');
    console.log('ServiceId: ', serviceId);
    var result;
    $.post(baseUrl + "server.php",
        {
            method: "subscribe",
            chain_id: chainId,
            service_id: serviceId,
            phone_number: phoneNumber,
            landing_id: landingId
        }
    ).done(
        function (data) {
            result = JSON.parse(data);
            opt_id = result['data'].OptId;
            console.log('Result: ', result['data'].OptId);
            callback(result)
        }
    );
}

function otpConfirm(chainId, serviceId, phoneNumber, landingId, code, callback) {
    var result;
    console.log('--------------------OTP CONFIRM--------------------');
    console.log('Service Id: ', serviceId);
    $.post(baseUrl + "server.php",
        {
            method: "confirm",
            chain_id: chainId,
            service_id: serviceId,
            phone_number: phoneNumber,
            landing_id: landingId,
            code: code,
            opt_id: opt_id
        }
    ).done(
        function (data) {
            result = JSON.parse(data);
            callback(result);
        }
    );
}

function getService(serviceId, callback) {
    $.post(baseUrl + "server.php",
        {
            method: "get",
            chain_id: chainId,
            service_id: serviceId,
            phone_number: '',
            landing_id: ''
        }
    ).done(
        function (data) {
            result = JSON.parse(data);
            callback(result);
        }
    );
}