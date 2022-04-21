<template>
  <ion-card color="customLight">
    <ion-card-header>
      <!-- <ion-item lines="none" class="ion-no-padding" color="customLight"> -->
        <ion-row class="ion-justify-content-between">
        <ion-label color="secondary">
          <strong>{{activity.name}}</strong>
          
          <ion-text color="medium">
            <p>{{activity.period}}</p>
          </ion-text>
        </ion-label>
        <ion-avatar>
          <ion-img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-puzzle-gaming-kiranshastry-lineal-color-kiranshastry.png"></ion-img>
        </ion-avatar>
        </ion-row>

      <!-- </ion-item> -->
    </ion-card-header>
    <ion-img v-if="activity.img" :src="activity.img"></ion-img>
  </ion-card>
</template>

<script>
import { extensionPuzzle } from "ionicons/icons";
import { IonCard, IonCardHeader, IonLabel, IonText, IonAvatar,IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props:['activity'],
  components: {
    IonImg,
    IonCard,
    IonCardHeader,
    IonLabel,
    IonText,
    IonAvatar,
  },
  data() {
    return {
      extensionPuzzle,
    };
  },
});
</script>
