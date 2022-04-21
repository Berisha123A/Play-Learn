<template>
  <ion-page>
    <admin-header>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/admin"></ion-back-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button> Add New </ion-button>
      </ion-buttons>
      <ion-title>Students</ion-title>
    </admin-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img src="../../../resources/avatar-rey.png" />
          </ion-avatar>
          <ion-label>
            <h2>Emri Mbiemri</h2>
            <p>Grupmosha 5-6</p>
          </ion-label>
          <ion-buttons slot="end">
            <ion-button> Edit </ion-button>
          </ion-buttons>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="../../../resources/avatar-rey.png" />
          </ion-avatar>
          <ion-label>
            <h2>Emri Mbiemri</h2>
            <p>Grupmosha 5-6</p>
          </ion-label>
          <ion-buttons slot="end">
            <ion-button> Edit </ion-button>
          </ion-buttons>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonContent,
} from "@ionic/vue";
import AdminHeader from "../../components/AdminHeader.vue";

export default defineComponent({
  name: "admin-manage-students",
  components: {
    AdminHeader,
    IonPage,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonContent,
  },
  data() {
    return {};
  },
});
</script>
