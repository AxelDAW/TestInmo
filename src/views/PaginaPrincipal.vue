<template>

    <Filtros @filtrar="recibirFiltro"/>
    <ListarPropiedades :propiedades="propiedades" :propiedadesFiltradas="propiedadesFiltradas" :filtro="filtro"/>
    
</template>


<script>

import ListarPropiedades from '../components/ListarPropiedades.vue'
import Filtros from '../components/Filtros.vue'
import dbPropiedades from '@/propiedades.json'

export default {

    components: { ListarPropiedades, Filtros},

    methods: {

        recibirFiltro( tipo ){
            
            this.propiedadesFiltradas = (dbPropiedades.propiedades).filter( (k)=>{ return k.tipo == tipo } );

        }

    },


    mounted(){

        this.propiedades = dbPropiedades.propiedades;

    },

    data(){

        return {

            propiedades: [],
            propiedadesFiltradas: [],

        }
    }

}

</script>



<style>


</style>