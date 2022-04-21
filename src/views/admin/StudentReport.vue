<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="closeModal">
            <ion-icon :icon="close">Close</ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title> Elira's Report</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
            <ion-card-title class="ion-margin"> E Marte, Aug 1, 2022 </ion-card-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card-header>
              <ion-card-title>Meals</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Breakfast: Something</p>
              <p>Zamra 1: Another thing</p>
              <p>Lunch: Another thing</p>
              <p>Zamra 2: Another thing</p>
            </ion-card-content>
          </ion-col>
          <ion-col>
            <ion-card-header>
              <ion-card-title>Mood</ion-card-title>
              <ion-card-subtitle>Somewhat Excited</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              This mornign alice was very scvited to show off her new pencil
              case to other children!
            </ion-card-content>
          </ion-col>
        </ion-row>
        <!-- Second row -->
        <ion-row>
          <ion-col style="flex-grow: 5">
            <ion-card-header>
              <ion-card-title>Naps</ion-card-title>
            </ion-card-header>
            <ion-card-content> 12:30pm : 1:11pm (0h:40m) </ion-card-content>
          </ion-col>
          <ion-col style="flex-grow: 7; flex-direction: column">
            <ion-card-header>
              <ion-card-title>Activities</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>1. Outdoor-Running</p>
              <p>Having fun in the park today</p>
            </ion-card-content>
            <ion-card-content>
              <p>2. Cooking</p>
              <p>Having fun in the park today</p>
            </ion-card-content>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import { close } from "ionicons/icons";

export default defineComponent({
  name: "admin-classes",
  components: { IonPage, IonContent },
  data() {
    return {
      close,
    };
  },
});
</script>
<style>
.large {
  height: 25vw;
}
</style>
