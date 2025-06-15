const username = document.querySelector("#username-signup")
const password = document.querySelector("#password-signup")
const btnSignup = document.querySelector("#btn-signup")
const passField = document.querySelector("#password-signup");
const showBtn = document.querySelector(".show-password i");

// Hàm lấy danh sách tài khoản từ localStorage
function getAccounts() {
    const accounts = localStorage.getItem('accounts');
    return accounts ? JSON.parse(accounts) : [
        // Tài khoản mặc định
        { username: "admin", password: "123456" },
        { username: "user1", password: "password123" },
        { username: "spotify_user", password: "music2024" },
        { username: "demo", password: "demo123" },
        { username: "test", password: "test123" }
    ];
}

// Hàm lưu danh sách tài khoản vào localStorage
function saveAccounts(accounts) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Hàm kiểm tra tài khoản đã tồn tại
function isUsernameExists(username) {
    const accounts = getAccounts();
    return accounts.some(account => account.username === username);
}

//Signup
btnSignup.addEventListener("click", (e) => {
    e.preventDefault() // ngăn chặn hành vi mặc định của button
    
    if (username.value == "" || password.value == ""){
        alert("Vui lòng nhập đầy đủ thông tin!")
        return;
    }
    
    // Kiểm tra độ dài username và password
    if (username.value.length < 3) {
        alert("Tên đăng nhập phải có ít nhất 3 ký tự!")
        return;
    }
    
    if (password.value.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!")
        return;
    }
    
    // Kiểm tra tài khoản đã tồn tại
    if (isUsernameExists(username.value)) {
        alert("Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác.")
        return;
    }
    
    // Tạo tài khoản mới
    const newUser = {
        username: username.value.trim(),
        password: password.value,
    }
    
    // Lấy danh sách tài khoản hiện tại và thêm tài khoản mới
    const accounts = getAccounts();
    accounts.push(newUser);
    
    // Lưu danh sách tài khoản đã cập nhật
    saveAccounts(accounts);
    
    // Gọi API (nếu cần)
    let apiUser = "http://localhost:3000/user"
    fetch(apiUser, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.log("API Error:", error);
        // Vẫn tiếp tục đăng ký thành công ngay cả khi API lỗi
    });
    
    alert("Chúc mừng bạn đã đăng ký tài khoản thành công! Vui lòng ấn OK để đăng nhập.")
    window.location.assign("/dangnhap.html") // Chuyển về trang đăng nhập thay vì index
})

// Ẩn hiện Password  
showBtn.onclick = (()=>{
    if(passField.type === "password"){
        passField.type = "text";
        showBtn.classList.add("hide-password");
    }else{
        passField.type = "password";
        showBtn.classList.remove("hide-password");
    }
});

// Khởi tạo danh sách tài khoản mặc định nếu chưa có
document.addEventListener('DOMContentLoaded', function() {
    const accounts = getAccounts();
    if (accounts.length === 0) {
        const defaultAccounts = [
            { username: "admin", password: "123456" },
            { username: "user1", password: "password123" },
            { username: "spotify_user", password: "music2024" },
            { username: "demo", password: "demo123" },
            { username: "test", password: "test123" }
        ];
        saveAccounts(defaultAccounts);
    }
});