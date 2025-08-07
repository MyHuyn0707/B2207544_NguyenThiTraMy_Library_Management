<template>
    <footer class="footer">
        <div class="footer__container">
            <!-- Logo & tiêu đề -->
            <div class="footer__column footer__brand">
                <img
                    src="/client/SpringBook.png"
                    alt="SpringBook Logo"
                    class="footer__logo"
                />
                <h2 class="footer__title">SPRINGBOOK BOOKSTORE</h2>
                <img
                    src="/client/logo-bct.webp"
                    alt="Bộ Công Thương"
                    class="footer__cert-logo"
                />
            </div>

            <!-- Dịch vụ -->
            <div class="footer__column">
                <h4>DỊCH VỤ</h4>
                <ul>
                    <li>
                        <a href="#"
                            ><i class="fas fa-file-alt"></i> Điều khoản sử
                            dụng</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-shield-alt"></i> Chính sách bảo
                            mật</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-credit-card"></i> Chính sách thanh
                            toán</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Hỗ trợ -->
            <div class="footer__column">
                <h4>HỖ TRỢ</h4>
                <ul>
                    <li>
                        <a href="#"
                            ><i class="fas fa-exchange-alt"></i> Chính sách đổi
                            trả</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-truck"></i> Chính sách vận
                            chuyển</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-users"></i> Chính sách khách sĩ</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Tài khoản -->
            <div class="footer__column">
                <h4>TÀI KHOẢN</h4>
                <ul>
                    <li>
                        <a href="#"
                            ><i class="fas fa-user"></i> Đăng nhập / Đăng ký</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-history"></i> Lịch sử mua hàng</a
                        >
                    </li>
                    <li>
                        <a href="#"
                            ><i class="fas fa-edit"></i> Cập nhật thông tin</a
                        >
                    </li>
                </ul>
            </div>

            <!-- Liên hệ -->
            <div class="footer__column">
                <h4>LIÊN HỆ</h4>
                <p>
                    <i class="fas fa-map-marker-alt"></i> 805 Hồng Bàng, Quận 5,
                    TP.HCM
                </p>
                <p>
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:02871086979">02871086979</a>
                </p>
                <p>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:online@springbook.vn"
                        >online@springbook.vn</a
                    >
                </p>
            </div>
        </div>

        <!-- Dòng cuối -->
        <div class="footer__bottom">
            <p>© 2024 - Thiết kế bởi Bao - Quản lý bởi SPRINGBOOK BOOKSTORE</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #fff;
    color: #333;
    font-family: "Segoe UI", "Roboto", sans-serif;
    padding: 40px 20px;
    border-top: 1px solid #ddd;
}

.footer__container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.footer__brand {
    text-align: center;
}

.footer__logo {
    width: 120px;
    margin-bottom: 10px;
}

.footer__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #2c3e50;
}

.footer__cert-logo {
    width: 150px;
    margin-top: 10px;
    border-radius: 4px;
}

.footer__column h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}

.footer__column ul {
    list-style: none;
    padding: 0;
}

.footer__column ul li {
    margin-bottom: 6px;
}

.footer__column ul li a {
    text-decoration: none;
    color: #333;
    font-size: 15px;
    transition: color 0.3s;
}

.footer__column ul li a i {
    margin-right: 6px;
    color: #81c240;
}

.footer__column ul li a:hover {
    color: #81c240;
}

.footer__column p {
    font-size: 15px;
    line-height: 1.5;
}

.footer__column p i {
    margin-right: 6px;
    color: #2c3e50;
}

.footer__bottom {
    text-align: center;
    margin-top: 30px;
    padding-top: 10px;
    border-top: 1px solid #eee;
}

.footer__bottom p {
    font-size: 14px;
    background-color: #2b6094;
    color: #fff;
    padding: 10px;
}

.footer__social a {
    margin: 0 8px;
    font-size: 18px;
    color: #2c3e50;
    transition: color 0.3s;
}

.footer__social a:hover {
    color: #16304a;
}
</style>
