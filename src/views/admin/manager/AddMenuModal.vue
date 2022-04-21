<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="closeModal">
            <ion-icon :icon="close"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button> Save </ion-button>
        </ion-buttons>
        <ion-title>Add Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="full" class="ion-no-margin">
        <ion-item>
          <ion-label>Date:</ion-label>
          <ion-input placeholder="ex. 31.02.2022"></ion-input>
        </ion-item>
        <ion-list class="ion-margin-top">
          <ion-item>
            <ion-label>Mengjesi:</ion-label>
            <ion-input placeholder="describe"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Zamra 1:</ion-label>
            <ion-input placeholder="describe"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Dreka:</ion-label>
            <ion-input placeholder="describe"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Zamra 2:</ion-label>
            <ion-input placeholder="describe"></ion-input>
          </ion-item>
        </ion-list>
        <ion-row class="ion-justify-content-center ion-padding">
          <ion-button size="medium" color="success"> Save </ion-button>
        </ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonTitle,
  IonButtons,
  IonButton,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { close } from "ionicons/icons";

export default defineComponent({
  name: "admin-add-new-menu",
  components: {
    IonPage,
    IonContent,
    IonTitle,
    IonButtons,
    IonButton,
  },
  setup() {
    // Icon
    close;

    const closeModal = () => {
      modalController.dismiss();
    };

    return { close, closeModal };
  },
});
</script>
