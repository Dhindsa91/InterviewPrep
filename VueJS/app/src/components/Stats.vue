<template>
  <div class="stats">

    <h1>Second Component</h1>
    <p>There are currently {{countLinks}} links</p>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex';




export default {
  name: 'Stats',
  computed: {
    ...mapGetters([
      'countLinks'
    ]),
    
  //other properties
  },


}
    
  

</script>


