<template>
  <q-page class="q-pa-sm" >

    <q-input bottom-slots v-model="text" label="What's Happening?" counter maxlength="100" :dense="dense" @keyup.enter="addNewQweet">
        <template v-slot:before>
          <q-avatar>
            <img src="/sreeman-modified.png" >
          </q-avatar>
        </template>


        <template v-slot:after>
          <q-btn round dense flat icon="send"  @click="addNewQweet" />
        </template>
      </q-input>

      <q-separator />
      <transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
<q-list class="q-pa-sm" v-for="qweet in qweets" :key="qweet.date" >
        <Qweet :qweet="qweet" @delete-qweet="deleteQweet" />
        <q-separator />
      </q-list>
    
  
</transition-group>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Qweet from '../components/Qweet.vue';
import axios from 'axios';



export default defineComponent({


  name: 'IndexPage',
  data() {
    return {
      text: '',
      qweets:[
        
      ]

      
    }
  },
 mounted() {

   axios.get("http://localhost:3000/")
   .then(response=>{
     console.log(response.data)
     this.qweets = response.data
     
   })
   .catch(error=>{
     console.log(error)
   })



  },
  methods: {
    addNewQweet() {
       let newQweet={
         text:this.text,
         date:String(Date.now())
       }
       
      this.qweets.push(newQweet);

      


      
    
    axios.post('http://localhost:3000/', newQweet)
  .then(response => {
    console.log('Tweet created:', response.data);
    this.$q.refresh()

  })


  .catch(error => {
    console.error('Error creating tweet:', error);
  });
    this.text='';
      
     },

     
    deleteQweet(id){

      
    this.qweets=this.qweets.filter((qweet)=>qweet._id!==id);

    axios.delete(`http://localhost:3000/${id}`)
    
  },



  
},
  components: {
    Qweet,
  },
  

})
</script>
