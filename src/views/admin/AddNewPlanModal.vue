<template>
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
      <ion-title>Plani Ditor</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list lines="full" class="ion-no-margin">
      <ion-item>
        <ion-label>Date:</ion-label>
        <ion-input placeholder="ex. 31.02.2022"></ion-input>
      </ion-item>
      <ion-list>
        <ion-list-header>
          <ion-label> Activity 1</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label>Activity Name:</ion-label>
          <ion-input placeholder="Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Activity Description:</ion-label>
          <ion-input placeholder="Description"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Activity Materials:</ion-label>
          <ion-input placeholder="Name"></ion-input>
        </ion-item>
      </ion-list>
      <ion-row class="ion-justify-content-center ion-padding">
        <ion-button size="medium"> + Add Activity </ion-button>
      </ion-row>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { close } from "ionicons/icons";

export default defineComponent({
  name: "add-new-plan-modal",
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
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
