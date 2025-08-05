<template>
    <div>
        <footer class="footer">
            <div class="footer__container container">
                <!-- Cột 1: Giới thiệu -->
                <div class="footer__column">
                    <h4>Giới thiệu</h4>
                    <ul>
                        <li><a href="#">Về SpringBook</a></li>
                        <li><a href="#">Hệ thống nhà sách</a></li>
                    </ul>
                </div>

                <!-- Cột 2: Dịch vụ -->
                <div class="footer__column">
                    <h4>Dịch vụ</h4>
                    <ul>
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Chính sách thanh toán</a></li>
                    </ul>
                </div>

                <!-- Cột 3: Hỗ trợ -->
                <div class="footer__column">
                    <h4>Hỗ trợ</h4>
                    <ul>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Chính sách vận chuyển</a></li>
                        <li><a href="#">Chính sách khách sĩ</a></li>
                    </ul>
                </div>

                <!-- Cột 4: Tài khoản -->
                <div class="footer__column">
                    <h4>Tài khoản của tôi</h4>
                    <ul>
                        <li><a href="#">Đăng nhập / Đăng ký</a></li>
                        <li><a href="#">Lịch sử mua hàng</a></li>
                        <li><a href="#">Cập nhật thông tin</a></li>
                    </ul>
                </div>

                <!-- Cột 5: Liên hệ -->
                <div class="footer__column">
                    <h4>Liên hệ</h4>
                    <p>Trụ sở: 805 Hồng Bàng, Quận 5, TP.HCM</p>
                    <p>Điện thoại: <a href="tel:02871086979">02871086979</a></p>
                    <p>
                        Email:
                        <a href="mailto:online@springbook.vn"
                            >online@springbook.vn</a
                        >
                    </p>
                </div>
            </div>
            <div class="footer__social text-center">
                <a href="https://facebook.com/">Facebook</a> |
                <a href="#">YouTube</a> |
                <a href="#">Instagram</a>
            </div>
            <p class="footer__copyright text-center">
                © 2024 - Thiết kế bởi Brian Nguyen - SPRINGBOOK BOOKSTORE
            </p>
        </footer>
    </div>
</template>
<style scoped>
.footer__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.footer__column {
    flex: 1 1 200px;
    min-width: 180px;
}

.footer__column h4 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer__column ul {
    list-style: none;
    padding: 0;
}

.footer__column ul li a {
    color: #000;
    text-decoration: none;
    font-size: 14px;
}

.footer__column ul li a:hover {
    color: #666;
}

.footer__social {
    margin-top: 20px;
    font-size: 14px;
}
</style>
