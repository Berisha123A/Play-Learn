<template>
  <ion-card color="customLight">
    <ion-card-header>
        <ion-label color="danger">
            {{meal.name}}
          <ion-text color="medium"> <!-- Try color Secondary -->
            <p>{{meal.period}}</p>
          <ion-icon :icon="heart" color="danger"> </ion-icon>
          <ion-icon :icon="heart" color="danger"> </ion-icon>
          <ion-icon :icon="heart" color="danger"> </ion-icon>
          <ion-icon :icon="heart" color="danger"> </ion-icon>
          <ion-icon :icon="heartOutline" color="danger"> </ion-icon>
          </ion-text>

        </ion-label>
          <ion-icon :icon="heart" color="danger"> </ion-icon>
    </ion-card-header>
    <ion-img v-if="meal.img" :src="meal.img"></ion-img>
  </ion-card>
</template>
<script>
import { heart, heartOutline} from "ionicons/icons";
import { IonCard, IonCardHeader, IonLabel, IonText,IonIcon  } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props:['meal'],
  components: {
    IonCard,
    IonCardHeader,
    IonLabel,
    IonText,
    IonIcon
  },
  data() {
    return {
      heart, heartOutline
    };
  },
});
</script>
