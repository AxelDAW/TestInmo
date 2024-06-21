<template>

    <h1 class="text-bg-primary p-2 container-xxl text-center">Visualizando el piso {{ id }}</h1>

    <div v-for="(propiedad, index) in propiedadesArray">

        <p class="container text-center">{{ info[index] }} - {{ propiedad }}</p>

    </div>

    <br>  

    <div class="container mt-5">

        <form @submit.prevent="guardarInfo">

            <h3 class="mb-4">Contacta con nosotros. A continuación, introduce tus datos:</h3>

            <div class="mb-3">
        
                <label for="nombre" class="form-label">Introduce tu nombre:</label>
                <input type="text" class="form-control" id="nombre" required v-model="nombre">

            </div>

            <div class="mb-3">

                <label for="telefono" class="form-label">Introduce tu número de teléfono:</label>
                <input type="number" class="form-control" id="telefono" required v-model="telefono">

            </div>

            <div class="mb-3">

                <label for="email" class="form-label">Introduce tu email:</label>
                <input type="email" class="form-control" id="email" required v-model="email">

            </div>

            <button type="submit" class="btn btn-outline-danger">Enviar</button>

        </form>

    </div>

    <br>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-end">
                <router-link to="/" class="link-dark me-3">Volver</router-link>
            </div>
        </div>
    </div>

</template>

<script>

import propiedades from '../propiedades.json'

export default {

    name: 'Piso',

    data(){

        return({

            id: this.$route.params.id,
            propiedadesArray: [],
            nombre: '',
            telefono: '',
            email: '',
            info: {
                'id': "id: ", 
                'tipo': "Tipo: ", 
                'direccion': "Direccion: ", 
                'descripcion': "Descripcion: ", 
                'tamaño_m2': "Tamaño: ", 
                'habitaciones': "Habitaciones: ", 
                'baños': "Baños: ", 
                'precio': "Precio: "
            }

        })

    },

    mounted(){

        this.mostrarInfo();

    },

    methods: {

        mostrarInfo(){

            this.propiedadesArray = propiedades.propiedades[this.id-1]

        },

        guardarInfo(){

            const datos = {

                nombre: this.nombre,
                telefono: this.telefono,
                email: this.email,

            };

            localStorage.setItem('contacto', JSON.stringify(datos));

        }

    }
        
}

</script>

<style scoped>



</style>