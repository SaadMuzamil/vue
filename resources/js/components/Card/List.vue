<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"cardAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Cards</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="datatable2" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Membership Tier</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><router-link :to='{name:"cardShow",params:{card_number:"4444-1000-2000-2000"}}'>Saad Bin</router-link></td>
                                <td>Muzamil</td>
                                <td>Gold</td>
                                <td>This is dummy text</td>
                            </tr>
                            <tr>
                                <td><router-link :to='{name:"cardShow",params:{card_number:"4444-1000-2000-2001"}}'>Saad Bin</router-link></td>
                                <td>Muzamil</td>
                                <td>Gold</td>
                                <td>This is dummy text2</td>
                            </tr>
                            <tr>
                                <td><router-link :to='{name:"cardShow",params:{card_number:"4444-1000-2000-2002"}}'>Saad Bin</router-link></td>
                                <td>Muzamil</td>
                                <td>Gold</td>
                                <td>This is dummy text3</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

export default {
    name:"Employees",
    data(){
        return {
            employees:[],
        }
    },
    mounted(){
        this.getEmployees()
    },
    methods:{

        async getEmployees(){
            await this.axios.get('/api/employee').then(response=>{
                this.employees = response.data
            }).catch(error=>{
                console.log(error)
                this.employees = []
            })
            $('#datatable2').DataTable();
        },
        deleteCategory(id){
            if(confirm("Are you sure to delete this employee ?")){
                this.axios.delete(`/api/employee/${id}`).then(response=>{
                    this.getEmployees()
                }).catch(error=>{
                    this.$router.push({name:"/"})
                })
            }
        }
    }
}
</script>
