<template>
    <div class="wrapper">
        <!--start header wrapper-->
        <div class="header-wrapper">
            <!--start header -->
            <header>
                <div class="topbar d-flex align-items-center" style="background-color: #DDE8F5;">
                    <nav class="navbar navbar-expand">

                        <div class="top-menu ms-auto">
                            <nav class="navbar navbar-expand-xl w-100">
                                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">

                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/home">
                                            <div class="menu-title">
                                                <h6>Trang Chủ</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/thunhap">
                                            <div class="menu-title">
                                                <h6>Thu nhập</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/chitieu">
                                            <div class="menu-title">
                                                <h6>Chi tiêu</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/thongke">
                                            <div class="menu-title">
                                                <h6>Thống kê</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/ngansach">
                                            <div class="menu-title">
                                                <h6>Ngân sách</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/no">
                                            <div class="menu-title">
                                                <h6>Quản lý nợ</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-2">
                                        <a class="nav-link" href="/tietkiem">
                                            <div class="menu-title">
                                                <h6>Quản lý tiết kiệm</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <div class="user-box dropdown">
                                        <div class="d-flex align-items-center">
                                            <img src="../../assets/images/avatars/avatar-1.png" class="rounded-circle"
                                                width="50" alt="">
                                            <div class="ms-2">
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="/profile">
                                                        <h6 class="mb-0">Nguyen Van A</h6>
                                                    </a>
                                                </li>
                                                <small class="ms-2">Đăng xuất</small>
                                            </div>
                                        </div>
                                    </div>

                                </ul>
                            </nav>
                        </div>

                    </nav>
                </div>
            </header>

        </div>
        <!--end header wrapper-->
        <!--start page wrapper -->
        <div class="page-wrapper" style="background-color: #fff; min-height: 100vh; margin-top: 60px;">

            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <!--end page wrapper -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i
                class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        <footer class="page-footer">
            <p class="mb-0">Copyright © 2021. All right reserved.</p>
        </footer>
    </div>

</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../../assets/plugins/chartjs/js/Chart.min.js";
import "../../assets/plugins/chartjs/js/Chart.extension.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
import "../../assets/js/pace.min.js";
export default {

}
</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css");
</style>