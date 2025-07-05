<template>
    <div class="row">
        <div class="col-6">
            <h5>Nợ cá nhân</h5>
            <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                <div class="card-body">
                    <div class="card" style="border-radius: 20px;">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <td>Tủ lạnh: </td>
                                        <td>Ngày bắt đầu: </td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <td>Lãi xuất: </td>
                                        <td>Ngày kết thúc: </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="dropdown text-end">
                            <button style="border-color: #fff; border-radius: 20px;"
                                class="btn btn-white  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <b>...</b>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-white" style="border-radius: 5px; ">
                                <li><button style=" border-radius: 5px; background-color: #DDE8F5; width: 100%;"
                                        class="btn align-middle mt-1 ms-1">Xóa nợ</button></li>
                                <li><button style=" border-radius: 5px; background-color: #DDE8F5; width: 100%;"
                                        class="btn align-middle mt-1 ms-1">Chỉnh sửa nợ</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card" style="border-radius: 20px;">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <td>Tủ lạnh: </td>
                                        <td>Ngày bắt đầu: </td>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <td>Lãi xuất: </td>
                                        <td>Ngày kết thúc: </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="dropdown text-end">
                            <button style="border-color: #fff; border-radius: 20px;"
                                class="btn btn-white  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <b>...</b>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-white" style="border-radius: 5px; ">
                                <li><button style=" border-radius: 5px; background-color: #DDE8F5; width: 100%;"
                                        class="btn align-middle mt-1 ms-1">Xóa nợ</button></li>
                                <li><button style=" border-radius: 5px; background-color: #DDE8F5; width: 100%;"
                                        class="btn align-middle mt-1 ms-1">Chỉnh sửa nợ</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <h5>Thêm nợ cá nhân</h5>
            <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="noName" class="form-label">Số tiền</label>
                        <input  type="text" class="form-control" id="noName" placeholder="Nhập tên nợ">
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Ngày bắt đầu</label>
                        <input type="date" class="form-control" id="startDate">
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Ngày kết thúc</label>
                        <input type="date" class="form-control" id="endDate">
                    </div>
                    <div class="mb-3">
                        <label for="interestRate" class="form-label">Lãi suất (%)</label>
                        <input type="number" class="form-control" id="interestRate" placeholder="Nhập lãi suất">
                    </div>
                    <div  class="text-end"><button class="btn btn-primary ">Thêm</button></div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>