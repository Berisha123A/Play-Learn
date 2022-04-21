<template>
  <ion-page>
    <admin-header>
      <ion-buttons>
        <ion-back-button defaultHref="/"></ion-back-button>
        <ion-title>Plani Ditor {{ id }}</ion-title>
      </ion-buttons>
    </admin-header>

    <ion-content :fullscreen="true">
      
      <!-- Add new Button-->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="openModal()">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- Add new Modal -->
      <ion-card v-for="n in 3" :key="n" color="light">
        <ion-card-header color="secondary" style="padding: 8px 0 8px 16px">
          <ion-item class="ion-no-padding" color="transparent">
            2{{ n }} March 2022 - E Hene
            <ion-buttons slot="end">
              <ion-button fill="outline">Edit</ion-button>
            </ion-buttons>
          </ion-item>
        </ion-card-header>
        <ion-card-content class="ion-no-padding ion-padding-vertical">
          <ion-item color="transparent">
            <ion-label> 9:00 - 9:30: Outdoor Activity - Running </ion-label>
          </ion-item>
          <ion-item color="transparent">
            <ion-label>
              10:30 - 11:00: Im doing pumpkin cookies today
            </ion-label>
          </ion-item>
          <ion-item color="transparent">
            <ion-label>14:00 - 15:30: Activity 3 </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
  
      <!-- <ion-card-content>
          <ion-list>
            <ion-list-header>Activity #1</ion-list-header>
            <ion-item>
              <ion-label position="floating">Activity Title</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Activity Period</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Activity Description</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item shape="round" class="ion-no-border ion-margin-bottom">
              <ion-label position="floating">Materials Used</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </ion-list>
          <ion-button class="ion-margin-top" expand="block" color="tertiary">
            <ion-icon :icon="add" />

            Add Activity
          </ion-button>
        </ion-card-content> -->
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonButtons, IonBackButton, IonContent, modalController } from "@ionic/vue";
import AdminHeader from "../../components/AdminHeader.vue";
import AddNewPlanModal from "./AddNewPlanModal.vue";
import { useRoute } from "vue-router";
import { add } from "ionicons/icons";
/* eslint-disable vue/no-unused-components */

export default defineComponent({
  name: "admin-planiditor",
  components: {
    AdminHeader,
    AddNewPlanModal,
    IonPage,
    IonButtons,
    IonBackButton,
    IonContent,
  },
  setup() {
    // icon
    add;

    const route = useRoute();
    const { id } = route.params;

    const openModal = async () => {
      const modal = await modalController.create({
        component: AddNewPlanModal, // Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };
    return { id, add, openModal };
  },
});
</script>
<style scoped>
ion-list {
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
}
ion-item:last-child {
  --border-width: 0 0 0 0 !important;
}
.large {
  height: 25vw;
}
</style>
