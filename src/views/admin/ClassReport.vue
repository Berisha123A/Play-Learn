<template>
  <ion-page>
    <admin-header>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button> Save </ion-button>
      </ion-buttons>
      <ion-title>Daily Reports</ion-title>
    </admin-header>

    <ion-content :fullscreen="true">
      <ion-grid class="ion-text-center">
        <ion-row class="header-row">
          <ion-col style="border-right: 2px solid var(--ion-color-success)">
            <ion-text>Name</ion-text>
          </ion-col>
          <ion-col>
            <ion-text>Check In</ion-text>
          </ion-col>

          <ion-col style="flex-direction: column">
            <ion-text>Meals</ion-text>
          </ion-col>
          <ion-col>
            <ion-text>Sleep</ion-text>
          </ion-col>
          <ion-col>
            <ion-text>Activities</ion-text>
          </ion-col>
          <ion-col>
            <ion-text>Check Out</ion-text>
          </ion-col>
        </ion-row>

        <ion-row v-for="n in 5" :key="n" @click="openModal()">
          <ion-col
            class="ion-padding-vertical"
            style="border-right: 2px solid var(--ion-color-success)"
          >
            <ion-text> Leart A. </ion-text>
          </ion-col>

          <ion-col class="ion-padding-vertical">
            <ion-text> 9:40 AM </ion-text>
          </ion-col>

          <ion-col class="ion-padding-vertical">
            <ion-text color="success">
              <ion-icon :icon="ellipse" />
              <ion-icon :icon="ellipse" />
              <ion-icon :icon="ellipse" />
              <ion-icon :icon="ellipse" />
            </ion-text>
          </ion-col>
          <ion-col class="ion-padding-vertical">
            <ion-text> 1 orë </ion-text>
          </ion-col>
          <ion-col class="ion-padding-vertical">
            <ion-text color="success">
              <ion-icon :icon="ellipse" />
              <ion-icon :icon="ellipse" />
              <ion-icon :icon="ellipse" />
            </ion-text>
          </ion-col>
          <ion-col class="ion-padding-vertical">
            <ion-text> 15:40 PM </ion-text>
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
  IonContent,
  IonButtons,
  IonBackButton,
  IonCol,
  IonRow,
  IonGrid,
  IonText,
  IonIcon,
  IonTitle,
  modalController
} from "@ionic/vue";
import { ellipse } from "ionicons/icons";
import AdminHeader from "../../components/AdminHeader.vue";
import StudentReport from "../../views/admin/StudentReport.vue";

export default defineComponent({
  name: "admin-class-report",
  components: {
    AdminHeader,
    IonPage,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCol,
    IonRow,
    IonGrid,
    IonText,
    IonIcon,
    IonTitle,
  },
  data() {
    return {
      ellipse,
    };
  },
  methods:{
    async openModal() {
      const modal = await modalController.create({
        component: StudentReport, // Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    }
  }
});
</script>
<style scoped>
.header-row {
  /* background: #7163aa; */
  /* color: #fff; */
  font-size: 18px;
  border-bottom: 2px solid var(--ion-color-success);
}
ion-row:nth-child(even) {
  background-color: var(--ion-color-light);
}
</style>
