<template>

    <div class="container-fluid">
        
        <div class="d-flex justify-content-center bg-info mt-4">
            
            <h1 class="d-inline-flex text-muted">Inmobiliaria</h1>
            
        </div>
            
    </div>



    <div class="mt-5 mb-4">

        <select @change="filtrar" v-model="tipo" name="filtro" id="filtros">

            <option value="">Todos</option>
            <option value="casa">Casas</option>
            <option value="chalet">Chalets</option>
            <option value="piso">Pisos</option>

        </select>

    </div>

    <form @submit.prevent="filtrar">
        
        <div class="mb-5"> 
    
            <input v-model="tipo" type="text" class=" col-6">
            <!-- <input type="submit" @click="filtrar" value="Filtrar."> -->

        </div>

    </form>

</template>


<script>

export default {

    name: 'Filtros',
    emits: ['filtrar'],

    data(){

        return {

            tipo: '',

        }
    },

    methods: {

        filtrar(){

            this.$emit('filtrar', this.tipo)
            
        }
    },

    mounted(){

        console.log(this.tipo)

    }

}

</script>


<style scoped>



</style>