<template>
    <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="sreeman-modified.png" >
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Sreeman Repaka</q-item-label>
          <q-item-label caption lines="2">
           {{ qweet.text }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          {{ qweet.date }}
        </q-item-section>


        <q-icon name="delete" size="md"  class="q-pa-md" @click="deleteQweet(qweet._id)"/>
      </q-item>
       


</template>

<script>
    export default {
        
            props: {
                qweet: {
                    type: Object,
                     
                },
            },
           
            
        
        methods: {
            deleteQweet(date) {
                
                console.log(date)
                this.$emit('delete-qweet',date)
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>