<template>
    <div class="container py-4">
        <div class="row">
            <!-- Bên trái -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thu nhập cá nhân</strong></h5>
                <div class="card-custom" style="background-color: #DDE8F5;">
                    <p><strong>Tổng thu nhập:</strong> 19.9350.000đ</p>
                    <p class="highlight">Thu nhập cao hơn tháng trước 1.850.000đ</p>
                </div>
                <div class="card" style="padding: 32px; box-shadow: none; background-color: #DDE8F5;">
                <div class="card-custom position-relative">
                    <div class="d-flex justify-content-between">
                        <div>
                            <strong>Tiền lương:</strong> 17.000.000đ<br>
                            <span class="text-small">Ngày: 5/2/2025</span><br>
                            <span class="highlight">Nhiều hơn 2.000.000đ so với tháng trước</span>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                ...
                            </button>
                            <div class="dropdown-menu dropdown-menu-custom">
                                <button>Chỉnh sửa thu thu nhập</button>
                                <button class="text-danger">Xóa thu nhập</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-custom position-relative">
                    <div class="d-flex justify-content-between">
                        <div>
                            <strong>Lợi nhuận chứng khoán:</strong> 350.000đ<br>
                            <span class="text-small">Ngày: 5/2/2025</span><br>
                            <span class="highlight">Ít hơn 150.000đ so với tháng trước</span>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                ...
                            </button>
                            <div class="dropdown-menu dropdown-menu-custom">
                                <button>Chỉnh sửa thu thu nhập</button>
                                <button class="text-danger">Xóa thu nhập</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-custom position-relative">
                    <div class="d-flex justify-content-between">
                        <div>
                            <strong>Tiền trợ cấp:</strong> 2.000.000đ<br>
                            <span class="text-small">Ngày: 5/2/2025</span>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                ...
                            </button>
                            <div class="dropdown-menu dropdown-menu-custom">
                                <button>Chỉnh sửa thu thu nhập</button>
                                <button>Xóa thu nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <!-- Khoản thu nhập -->
                

            <!-- Bên phải -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thêm thu nhập</strong></h5>

                <a href="#" class="text-primary">Thêm thu nhập tự động</a>
                <div class="card-custom mt-2">
                    <form>
                        <div class="mb-2">
                            <label for="soTien" class="form-label">Số tiền</label>
                            <input type="number" class="form-control" id="soTien" placeholder="Value" />
                        </div>

                        <div class="mb-2">
                            <label for="danhMuc" class="form-label">Danh Mục</label>
                            <select class="form-select" id="danhMuc">
                                <option>Lương</option>
                                <option>Chứng khoán</option>
                                <option>Trợ cấp</option>
                            </select>
                        </div>

                        <div class="mb-2">
                            <label for="ngay" class="form-label">Ngày thu nhập</label>
                            <input type="date" class="form-control" id="ngay" />
                        </div>

                        <div class="mb-2">
                            <label for="moTa" class="form-label">Mô tả</label>
                            <textarea class="form-control" id="moTa" rows="2" placeholder="Value"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {

}
</script>
<style>
body {
    background-color: #f2f7ff;
}

.card-custom {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
}

.text-small {
    font-size: 0.9rem;
}

.highlight {
    font-style: italic;
    color: #357edd;
}

.dropdown-menu-custom {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 180px;
    padding: 8px;
}

.dropdown-menu-custom button {
    display: block;
    width: 100%;
    background: #BBD2F4;
    border: none;
    text-align: left;
    padding: 0.25rem 0;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 10px;
}
</style>