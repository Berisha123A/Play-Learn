<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card class="ion-margin-bottom" color="customLight">
        <ion-card-header>
            <ion-text color="red">
              <strong>
              Feeling excited today !!!
              </strong>
              </ion-text>
        </ion-card-header>
      </ion-card>
      <ActivityCard
        :activity="activity"
        v-for="activity in activities"
        :key="activity.name"
      />
      <MealCard :meal="meal" v-for="meal in meals" :key="meal.name" />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import ActivityCard from "@/components/client/ActivityCard.vue";
import MealCard from "@/components/client/MealCard.vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
} from "@ionic/vue";

export default defineComponent({
  name: "student-report",
  components: {
    ActivityCard,
    MealCard,
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
  },
  data() {
    return {
      activities: [
        {
          name: "Outdoor Activity: Running Game",
          period: "9:00 - 10:30",
          img: "",
        },
        {
          name: "I'm doing pumpkin cookies today",
          period: "10:00 - 11:30",
          img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F1512w-kid-cooking-pancakes-getty.jpg%3Fitok%3DDD_1JpC_",
        },
      ],
      meals: [
        {
          name: "Jogurt me fruta mali",
          period: "11:00 - 11:30",
          img: "",
        },
      ],
    };
  },
});
</script>
