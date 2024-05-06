import $, { event } from 'jquery';


export function checkUser(){
    var reg = /^[A-Za-z0-9]*$/;
    if($("#username").val() === ""){
        $("#announceUser").html("Hãy nhập tên đăng nhập");
        return false;
    }
    if (reg.test($("#username").val())){
        $("#announceUser").html("");
        return true;
    }
    if (!reg.test($("#username").val())){
        $("#announceUser").html("Tên đăng nhập không chứa ký tự đặc biệt");
        return false;
    }
   
};
export function checkEmail(){
    var email = $("#email").val()
    if(email === ""){
        $("#announceEmail").html("Hãy nhập email!");
        return false;
    }
    else{
        $("#announceEmail").html("");
        return true;
    }
};
export function checkPass(){
    var reg = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    var password = $("#password").val();
    if (password === "") {
        $("#announcePass").html("Hãy nhập mật khẩu")
        return false;
    }
    if (!reg.test(password)) {
        $("#announcePass").html("Mật khẩu chứa chữ số và ký tự đặc biệt");
        return false;
    } else {
        $("#announcePass").html("");
        return true;
    }
    
};
// export function onCapslock (){
//     const passwordInput = $("#password");
//     const warning = $("#capslock-warning");
    
//     passwordInput.on('keyup', (event) => {
//         if (event.originalEvent.getModifierState('CapsLock')) {
//             warning.prop('hidden', false); 
//         } else {
//             warning.prop('hidden', true);
//         }
//     });
// }
  