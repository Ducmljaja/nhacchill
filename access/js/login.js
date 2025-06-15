// Hàm lấy danh sách tài khoản từ localStorage
function getAccounts() {
    const accounts = localStorage.getItem('accounts');
    return accounts ? JSON.parse(accounts) : [
        // Tài khoản mặc định nếu localStorage trống
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

// Chức năng hiển thị/ẩn mật khẩu
document.addEventListener('DOMContentLoaded', function() {
    const showPasswordBtn = document.querySelector('.show-password');
    const passwordInput = document.getElementById('password');
    
    if (showPasswordBtn && passwordInput) {
        showPasswordBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
});

// Chức năng đăng nhập
document.getElementById('btn-login').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    // Kiểm tra nếu không nhập username hoặc password
    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
        return;
    }
    
    // Lấy danh sách tài khoản từ localStorage
    const accounts = getAccounts();
    
    // Kiểm tra tài khoản
    const validAccount = accounts.find(account => 
        account.username === username && account.password === password
    );
    
    if (validAccount) {
        // Đăng nhập thành công
        alert('Đăng nhập thành công!');
        
        // Lưu thông tin đăng nhập (tùy chọn)
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        // Chuyển hướng đến trang chính
        window.location.href = 'index.html';
    } else {
        // Đăng nhập thất bại
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        
        // Xóa nội dung password để bảo mật
        document.getElementById('password').value = '';
    }
});

// Cho phép đăng nhập bằng phím Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('btn-login').click();
    }
});

// Hiển thị danh sách tài khoản demo (tùy chọn - để test)
function showDemoAccounts() {
    const accounts = getAccounts(); // Lấy từ localStorage
    let accountList = "Tài khoản có sẵn:\n\n";
    accounts.forEach((account, index) => {
        accountList += `${index + 1}. Username: ${account.username} | Password: ${account.password}\n`;
    });
    alert(accountList);
}

// Thêm nút hiển thị tài khoản demo (có thể bỏ trong production)
document.addEventListener('DOMContentLoaded', function() {
    // Tạo nút demo (có thể xóa khi deploy thực tế)
    const demoBtn = document.createElement('button');
    demoBtn.textContent = 'Xem tài khoản demo';
    demoBtn.type = 'button';
    demoBtn.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 5px 10px; background: #1db954; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;';
    demoBtn.onclick = showDemoAccounts;
    document.body.appendChild(demoBtn);
});

// Kiểm tra trạng thái đăng nhập khi load trang
window.addEventListener('load', function() {
    // Khởi tạo tài khoản mặc định nếu localStorage trống
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
    
    // Nếu đã đăng nhập, có thể chuyển hướng trực tiếp
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        const confirmRedirect = confirm('Bạn đã đăng nhập rồi. Có muốn chuyển đến trang chính không?');
        if (confirmRedirect) {
            window.location.href = 'index.html';
        }
    }
});