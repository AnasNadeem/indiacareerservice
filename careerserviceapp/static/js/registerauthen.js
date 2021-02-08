let registerForm = document.getElementById('submitBtnId');

// Student Name 
let studentName = document.getElementById('studentName');
studentName.addEventListener('input', function checkName() {
    let studentNameAlert = document.getElementById('studentNameAlert');
    if ((studentName.value.length <= 2) || (studentName.value.length >= 40)) {
        let msg = `Name should be of <strong> 2 to *40 characters </strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        studentNameAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        studentNameAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// Father Name 
let fatherName = document.getElementById('fatherName');
fatherName.addEventListener('input', function checkName() {
    let fatherNameAlert = document.getElementById('fatherNameAlert');
    if ((fatherName.value.length <= 2) || (fatherName.value.length >= 40)) {
        let msg = `Name should be of <strong> 2 to *40 characters </strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        fatherNameAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        fatherNameAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// Phone Number Validation 
let phoneNumber = document.getElementById('phoneNumber');
phoneNumber.addEventListener('input', function phoneNumAuthen() {
    let phoneNumberAlert = document.getElementById('phoneNumberAlert');
    if (phoneNumber.value.length != 10) {
        let msg = `Phoe number should be <strong> 10 digits </strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        phoneNumberAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        phoneNumberAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// emailName Validation 
let emailName = document.getElementById('emailName');
emailName.addEventListener('input', function mailAuthen() {
    let emailNameAlert = document.getElementById('emailNameAlert')
    let mailLogicRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailName.value.match(mailLogicRegex)) {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        emailNameAlert.innerHTML = alertMsg
        registerForm.disabled = false
    } else {
        let msg = `Enter valid <strong> email address </strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        emailNameAlert.innerHTML = alertMsg
        registerForm.disabled = true
    }
})

// Address Verification 
let inputAddress = document.getElementById('inputAddress');
inputAddress.addEventListener('input', function checkAdd() {
    let inputAddressAlert = document.getElementById('inputAddressAlert');
    if ((inputAddress.value.length <= 8) || (inputAddress.value.length >= 100)) {
        let msg = `Address should be of <strong> 8 to *100 characters </strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        inputAddressAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        inputAddressAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// https://api.postalpincode.in/pincode/801105
let inputZip = document.getElementById("inputZip")
inputZip.addEventListener('input', function fill(){
        let inputZipAlert = document.getElementById('inputZipAlert')
        let state = document.getElementById('inputState')
        let district = document.getElementById('inputCity')
        if(inputZip.value.length==6){
            let api_key = `https://api.postalpincode.in/pincode/${inputZip.value}`
            async function getdata(){
                let response = await fetch(api_key)
                let data = await response.json()
                return data;
            }
            getdata().then(function(data){
                let stateval = data[0].PostOffice[0].State
                let distval = data[0].PostOffice[0].District
                state.value = `${stateval}`
                district.value = `${distval}`
            })
            let msg = `<strong>Success </strong>`
            let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
            inputZipAlert.innerHTML = alertMsg
            registerForm.disabled = true
        }else{
            let msg = `PIN Code should be of <strong>6 digits </strong>`
            let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
            inputZipAlert.innerHTML = alertMsg
            registerForm.disabled = true
        }
    })

// // City Name 
// let inputCity = document.getElementById('inputCity');
//     let inputCityAlert = document.getElementById('inputCityAlert');
//     if ((inputCity.value.length <= 2) || (inputCity.value.length >= 40)) {
//         let msg = `City name should be of <strong> 2 to *40 characters </strong>`
//         let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
//         inputCityAlert.innerHTML = alertMsg
//         registerForm.disabled = true
//     } else {
//         let msg = `<strong>Success</strong>`
//         let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
//         inputCityAlert.innerHTML = alertMsg
//         registerForm.disabled = false
//     }

// // State Name 
// let inputState = document.getElementById('inputState');
// inputState.addEventListener('input', function checkName() {
//     let inputStateAlert = document.getElementById('inputStateAlert');
//     if ((inputState.value.length <= 2) || (inputState.value.length >= 40)) {
//         let msg = `State name should be of <strong> 2 to *40 characters </strong>`
//         let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
//         inputStateAlert.innerHTML = alertMsg
//         registerForm.disabled = true
//     } else {
//         let msg = `<strong>Success</strong>`
//         let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
//         inputStateAlert.innerHTML = alertMsg
//         registerForm.disabled = false
//     }
// })

// marksSheetTenth Validation 
let marksSheetTenth = document.getElementById('marksSheetTenth')
marksSheetTenth.addEventListener('input', function checkSize() {
    let marksSheetTenthAlert = document.getElementById('marksSheetTenthAlert')
    let sizelogic = ((marksSheetTenth.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        marksSheetTenthAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        marksSheetTenthAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// marksSheetTwelve Validation 
let marksSheetTwelve = document.getElementById('marksSheetTwelve')
marksSheetTwelve.addEventListener('input', function checkSize() {
    let marksSheetTwelveAlert = document.getElementById('marksSheetTwelveAlert')
    let sizelogic = ((marksSheetTwelve.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        marksSheetTwelveAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        marksSheetTwelveAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// adharCard Validation 
let adharCard = document.getElementById('adharCard')
adharCard.addEventListener('input', function checkSize() {
    let adharCardAlert = document.getElementById('adharCardAlert')
    let sizelogic = ((adharCard.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        adharCardAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        adharCardAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// passportSizePhoto Validation 
let passportSizePhoto = document.getElementById('passportSizePhoto')
passportSizePhoto.addEventListener('input', function checkSize() {
    let passportSizePhotoAlert = document.getElementById('passportSizePhotoAlert')
    let sizelogic = ((passportSizePhoto.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        passportSizePhotoAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        passportSizePhotoAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// tranferCertificate Validation 
let tranferCertificate = document.getElementById('tranferCertificate')
tranferCertificate.addEventListener('input', function checkSize() {
    let tranferCertificateAlert = document.getElementById('tranferCertificateAlert')
    let sizelogic = ((tranferCertificate.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        tranferCertificateAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        tranferCertificateAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// migrationCertificate Validation 
let migrationCertificate = document.getElementById('migrationCertificate')
migrationCertificate.addEventListener('input', function checkSize() {
    let migrationCertificateAlert = document.getElementById('migrationCertificateAlert')
    let sizelogic = ((migrationCertificate.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        migrationCertificateAlert.innerHTML = alertMsg
        registerForm.disabled = true
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        migrationCertificateAlert.innerHTML = alertMsg
        registerForm.disabled = false
    }
})

// jeemainsCertificate Validation 
let jeemainsCertificate = document.getElementById('jeemainsCertificate')
jeemainsCertificate.addEventListener('input', function checkSize() {
    let jeemainsCertificateAlert = document.getElementById('jeemainsCertificateAlert')
    let sizelogic = ((jeemainsCertificate.files[0].size) / 1000000)
    if (sizelogic >= 1.0) {
        let msg = `File size should be less than 1MB.<br><strong> Your file is of ${sizelogic.toFixed(2)} MB</strong>`
        let alertMsg = `<div class="alert alert-danger mt-2 mb-0" role="alert">${msg}</div>`
        jeemainsCertificateAlert.innerHTML = alertMsg
    } else {
        let msg = `<strong>Success</strong>`
        let alertMsg = `<div class="alert alert-success mt-2 mb-0" role="alert">${msg}</div>`
        jeemainsCertificateAlert.innerHTML = alertMsg
    }
})