<template>
    <Navbar />
    <section id="login">
        <div class="container">
            <div class="row justify-content-center mf">
                <div class="col-lg-6 shadow-lg rounded-3 right-side ">
                    <form @submit.prevent= "tambahSupplier()">
                        <p class="bg-info text-primary title-form px-3 py-2 rounded-top">
                            Tambah Supplier
                        </p>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="NamaSupplier" class="form-label">Nama Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="namaSupplier" type="text" class="form-control" id="NamaSupplier" name="namaSupplier"
                                    placeholder="Masukan Nama Supplier" autofocus />
                            </div>
                        </div>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="AlamatSupplier" class="form-label">Alamat Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="alamat"  type="text" class="form-control" id="AlamatSupplier" name="alamat"
                                    placeholder="Masukan Alamat Supplier" autofocus />
                            </div>
                        </div>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="NoTelpSupplier" class="form-label">No Telp Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="noTelp" type="text" class="form-control" id="NoTelpSupplier" name="noTelp"
                                    placeholder="Masukan No Telp Supplier" autofocus />
                            </div>
                        </div>
                     
                        <div class="d-flex justify-content-between pb">
                            <router-link to="/supplier">
                                <button class="btn btn-dark action">Kembali</button>
                            </router-link>

                            <button class="btn btn-primary action">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios"

export default {
    data: function () {
        return {
            namaSupplier:'',
            alamat :'',
            noTelp:''
        }
    },

    methods: {
        tambahSupplier: async function () {
            let dataSupplier = {
                namaSupplier: this.namaSupplier,
                alamat: this.alamat,
                noTelp: this.noTelp,
            }
            await axios.post("http://159.223.57.121:8090/supplier/create", dataSupplier, {

                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                    const data = await response.data;

                    if (data.status === 'OK') {
                        this.$swal.fire("Sukses tambah supplier");
                    }
                    this.$router.push('/supplier');
                    this.namaSupplier = '',
                    this.alamat = '',
                    this.noTelp = ''
                });
        },

    },
    components: {
        Navbar,
    }
};
</script>