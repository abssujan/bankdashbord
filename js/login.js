//target submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFiled  = document.getElementById('user-email');
    const email = emailFiled.value;
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    if(email === 'tonmoybdinfo@gmail.com' && password === 'tonmoybdinfo'){
        window.location.href = 'bank-dashbord.html';
    }else {
        alert('Invaild user name and password')
    }
})