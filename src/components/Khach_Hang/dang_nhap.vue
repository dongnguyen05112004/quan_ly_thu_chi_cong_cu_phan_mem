<template>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="card border-0 shadow">
                    <div class="card-body p-4">
                        <div class="text-center mb-4">
                            <h3 class="fw-bold">Đăng Nhập</h3>
                        </div>

                        <form >
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input  type="email" class="form-control" id="email"
                                    placeholder="Nhập email">
                            </div>

                            <div class="mb-4">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input  type="password" class="form-control" id="password"
                                    placeholder="Nhập mật khẩu">
                            </div>

                            <button type="submit" class="btn btn-primary w-100 mb-3">
                                Đăng Nhập
                            </button>

                            <div class="text-center">
                                <a href="#" class="text-decoration-none small me-2">Quên mật khẩu?</a>
                                <span class="text-muted">|</span>
                                <router-link to="/khach-hang/dang-ky" class="text-decoration-none small ms-2">
                                    Đăng ký tài khoản
                                </router-link>
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