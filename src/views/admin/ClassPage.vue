<template>
  <ion-page>
    <admin-header>
      <ion-buttons>
        <ion-back-button defaultHref="/"></ion-back-button>
        <ion-title>Class {{ id }}</ion-title>
      </ion-buttons>
    </admin-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button
              class="largeButton"
              size="large"
              expand="block"
              :router-link="`${id}/activities`"
              >Aktivitete</ion-button
            >
          </ion-col>
          <ion-col size="6">
            <ion-button
              class="largeButton"
              size="large"
              expand="block"
              :router-link="`${id}/meals`"
              >Ushqimi</ion-button
            >
          </ion-col>
          <ion-col size="6">
            <ion-button
              class="largeButton"
              size="large"
              expand="block"
              :router-link="`${id}/raportiditor`"
              >Raporti Ditor</ion-button
            >
            </ion-col>
            <ion-col size="6">
              <ion-button
                class="largeButton"
                size="large"
                expand="block"
                :router-link="`${id}/planiditor`"
                >Plani Ditor</ion-button
              >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonButtons,
  IonBackButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import AdminHeader from "../../components/AdminHeader.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "admin-class",
  components: {
    AdminHeader,
    IonPage,
    IonButtons,
    IonBackButton,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
});
</script>
