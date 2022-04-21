<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <slot></slot>
      </ion-toolbar>
    </ion-header>
</template>
<script>
import { defineComponent } from 'vue'
import {IonPage, IonHeader, IonToolbar, IonBackButton, IonAvatar, IonLabel, IonButtons } from '@ionic/vue'
import { triangle } from "ionicons/icons";

export default defineComponent({
  name:'admin-header',
  components:[
    IonPage, IonHeader, IonToolbar, IonBackButton, IonAvatar, IonLabel, IonButtons
  ],
  data(){
    return{
      triangle
    }
  }
})
</script>
