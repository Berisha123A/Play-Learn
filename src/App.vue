<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  data(){
    return{
      // Data From Api
      student:{
        name:'',
        class:'',
        planiDitor:{
          activities:['Activity 1', 'Activity2'],
          meals:['Mengjesi 1', 'Zamra 1', 'Dreka', 'Zamra 2']
        },
        dailyRaport:{
          checkin: '',
          checkout: '',
        }
      }
    }
  }
});
</script>