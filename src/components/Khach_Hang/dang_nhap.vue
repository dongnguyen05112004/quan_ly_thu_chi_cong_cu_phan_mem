<template>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="card border-0 shadow">
                    <div class="card-body p-4">
                        <div class="text-center mb-4">
                            <h3 class="fw-bold">Đăng Nhập</h3>
                        </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="taikhoan.email" type="email" class="form-control" id="email"
                                    placeholder="Nhập email">
                            </div>

                            <div class="mb-4">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input v-model="taikhoan.mat_khau" type="password" class="form-control" id="password"
                                    placeholder="Nhập mật khẩu">
                            </div>

                            <button v-on:click="Login()" class="btn btn-primary w-100 mb-3">
                                Đăng Nhập
                            </button>

                            <div class="text-center">
                                <a href="#" class="text-decoration-none small me-2">Quên mật khẩu?</a>
                                <span class="text-muted">|</span>
                                <router-link to="/khach-hang/dang-ky" class="text-decoration-none small ms-2">
                                    Đăng ký tài khoản
                                </router-link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import axios from 'axios';
export default {
    data() {
        return {
            taikhoan: {
                email : '',
                mat_khau: '',
            },
        }
    },
    methods:{
        Login(){
            axios
            .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap", this.taikhoan)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        localStorage.setItem('tai_khoan_login', res.data.token);
                        this.$router.push('/home');
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }
    }
}


</script>
