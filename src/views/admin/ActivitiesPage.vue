<template>
  <ion-page>
    <admin-header>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"> Back</ion-back-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button> Save </ion-button>
      </ion-buttons>
      <ion-title>Activitites</ion-title>
    </admin-header>

    <ion-content :fullscreen="true">
      <ion-list inset="true">
        <ion-accordion-group>
          <ion-accordion :value="n" v-for="n in 3" :key="n">
            <ion-item slot="header" color="secondary">
              <ion-label>Mal Gashi
                <ion-text>
                <!-- Try color Secondary -->
                  <p>Checked in at 8:00</p>
                </ion-text>
              </ion-label>
            </ion-item>

            <ion-list slot="content" class="ion-padding">
              <ion-item>
                <ion-label position="stacked">#1 Outdoor Activity - Running</ion-label>
                <ion-input placeholder="Describe Mood..."></ion-input>
                <ion-button class="ion-margin-bottom" fill="outline">Add Image</ion-button>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">#2 Im doing pumpkin cookies today</ion-label>
                <ion-input placeholder="Describe Mood..."></ion-input>
                <ion-button class="ion-margin-bottom" fill="outline">Add Image</ion-button>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">#3 Activity 3</ion-label>
                <ion-input placeholder="Describe Mood..."></ion-input>
                <ion-button class="ion-margin-bottom" fill="outline">Add Image</ion-button>
              </ion-item>
            </ion-list>
          </ion-accordion>
        </ion-accordion-group>
      </ion-list>
      </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonItem,
  IonLabel,
  IonText,
  IonInput,
} from "@ionic/vue";
import AdminHeader from "../../components/AdminHeader.vue";

export default defineComponent({
  name: "admin-activities",
  components: {
    AdminHeader,
    IonPage,
    IonContent,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonItem,
    IonLabel,
    IonText,
    IonInput,
  },
  data() {
    return {};
  },
});
</script>
