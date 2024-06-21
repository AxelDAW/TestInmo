<template>

    <div class="cointaner">

        <div class="row">
            
            <div class="col-12 card" v-for="propiedad in (propiedadesFiltradas.length > 0 ? propiedadesFiltradas : propiedades)">
                
                <span class="text-center">
                    
                    <p class="text-center">{{ propiedad.id }} - {{ propiedad.direccion }} - {{ propiedad.descripcion }}</p>
                    <button @click="mostrandoImagen = (mostrandoImagen == propiedad.id ? false : propiedad.id)" class="btn btn-primary">Ver imagen.</button>
                    <img v-if="mostrandoImagen == propiedad.id" :src="'id' + propiedad.id  + '.jpg'" class="w-25" alt="">
                </span>
                
                <div class="col align-self-e">
                    
                    <router-link :to="'/'+ propiedad.tipo +'/'+ propiedad.id">Más Info:</router-link>
                    
                </div>
                
            </div>

        </div>
            
    </div>

</template>


<script>

export default {

    name: 'ListarPropiedades',

    props: ['propiedades', 'propiedadesFiltradas'],

    data(){

        return({

            mostrandoImagen: false,

        })

    },

}

</script>

