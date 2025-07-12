<template >
    <div>
         <div class="row">
            <div class="col-lg-4">
                <p>Ngày Bắt Đầu</p>
                <input type="date" class="form-control mt-2 mb-2">
            </div>

            <div class="col-lg-4">
                <p>Ngày Kết Thúc</p>
                <input type="date" class="form-control mt-2 mb-2" >
            </div>
            <div class="col-lg-4">
                <div class="card" >
                    
                    <div class="card-body" >
                        <h5>Ngân Sách</h5>
                        <p class="mt-3" >{{ chenh_lech }} VNĐ</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-12">
                <Bar
                    v-if="isloading == true"
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                />
            </div>
            
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="mb-3 mr-5">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="tong_tien"></textarea>
            </div>
            </div>
            
        </div>
        <div class="row">
            <div class="row row-cols-auto g-3">
				<div class="col-lg-4">
				    <button type="button" class="btn btn-primary px-5" v-on:click="hienThiTongThu()">Tổng Thu</button>
				</div>
				<div class="col-lg-4">
				    <button type="button" class="btn btn-danger px-5" v-on:click="hienThiTongChi()">Tổng Chi</button>
				</div>
				<div class="col-lg-4">
					<button type="button" class="btn btn-success px-5" v-on:click="chenhlech()">Chênh Lệch</button>
				</div>
									
									
			</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    backgroundColor: '#FFDE59',
                    data: []
                }]
            },
            chartOptions: {
                responsive: true
            },
            isloading: false,
            tong_tien: '',
            tong_tien_thu:{},
            tong_tien_chi:{},
            chenh_lech: '',

        }


    },


    mounted() {
        this.getdatachart();
    },
    methods: {

        getdatachart() {

            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.chartData.labels = res.data.danh_muc_thu_chi;
                    this.chartData.datasets[0].data = res.data.list_tien_thu_chi;
                    this.isloading = true;
                    this.chenh_lech = res.data.chenh_lech;
                })
        },
        hienThiTongThu() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
            .then((res) => {
                    this.tong_tien = res.data.tong_tien_thu;
                    

                })
           
    },
    hienThiTongChi() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
            .then((res) => {
                    this.tong_tien = res.data.tong_tien_chi;
                })
           
    },
    chenhlech(){
        axios.get('http://127.0.0.1:8000/api/canhan/baocao')
            .then((res) => {
                    this.tong_tien = res.data.chenh_lech;
                })
    }
    },
}
</script>
<style >
    
</style>