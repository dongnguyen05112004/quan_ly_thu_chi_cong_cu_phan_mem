<template>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="card border-0 shadow">
                    <div class="card-body p-4">
                        <div class="text-center mb-4">
                            <h3 class="fw-bold">Đăng ký</h3>
                        </div>
                        <form >
                            <div class="mb-3">
                                <label for="email" class="form-label">Tên người dùng</label>
                                <input  type="" class="form-control" id="email"
                                    placeholder="Nhập tên người dùng">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input  type="email" class="form-control" id="email"
                                    placeholder="Nhập email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input  type="password" class="form-control" id="password"
                                    placeholder="Nhập mật khẩu">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Xác nhận mật khẩu</label>
                                <input  type="password" class="form-control" id="password"
                                    placeholder="Nhập lại mật khẩu">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Ngày sinh</label>
                                <input  type="date" class="form-control" id="password"
                                   >
                            </div>

                            <button type="submit" class="btn btn-primary w-100 mb-3">
                                Đăng ký
                            </button>
                            <div class="text-center">
                                <a class="text-decoration-none small me-2">Đăng ký bằng google và facebook</a>
                                <a href="#" class="text-decoration-none small me-2"><i class="fa-brands fa-google"></i></a>
                                <span class="text-muted">|</span>
                                <a href="#" class="text-decoration-none small me-2"><i class="fa-brands fa-facebook"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {

}


</script>
<style>
</style>