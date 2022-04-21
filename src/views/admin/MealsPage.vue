<template>
  <ion-page>
    <admin-header>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/admin"></ion-back-button>
      </ion-buttons>
      <ion-title>Meals</ion-title>
    </admin-header>
    <ion-content :fullscreen="true">
      <ion-list class="ion-margin">
        <ion-item>
          <ion-label>Meal:</ion-label>
          <ion-select value="mengjesi">
            <ion-select-option value="mengjesi">Mengjesi</ion-select-option>
            <ion-select-option value="zamra1">Zamra 1</ion-select-option>
            <ion-select-option value="dreka">Dreka</ion-select-option>
            <ion-select-option value="zamra2">Zamra 2</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Food: </ion-label>
          <ion-radio-group value="grape">
            <ion-item>
              <ion-label>Hiq</ion-label>
              <ion-radio slot="start" color="success" value="hiq"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Pak</ion-label>
              <ion-radio slot="start" color="tertiary" value="pak"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Mire</ion-label>
              <ion-radio slot="start" color="danger" value="mire"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Shume</ion-label>
              <ion-radio slot="start" color="danger" value="shume"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-item>

        <ion-item class="ion-margin-vertical">
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-button color="medium" fill="solid" size="medium"
                >Select All</ion-button
              >
            </ion-row>
            <ion-row>
              <ion-card class="ion-padding ion-margin"
                v-for="student in students"
                :key="student.id"
              >
                <ion-avatar>
                  <img src="../../../resources/avatar-rey.png" />
                </ion-avatar>
                <ion-checkbox
                  v-if="student"
                  :checked="student.isChecked"
                  @update:modelValue="student.isChecked = $event"
                  :modelValue="student.isChecked"
                  >></ion-checkbox
                >
                <ion-text>{{ student.name }}</ion-text>
              </ion-card>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-row class="ion-justify-content-center">
          <ion-button fill="solid" color="success" expand="block" size="large">
            Update Meal</ion-button
          >
        </ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import AdminHeader from "../../components/AdminHeader.vue";
import { starOutline } from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonGrid,
  IonRow,
  IonAvatar,
  // IonText,
  IonButtons,
  IonButton,
  IonBackButton
} from "@ionic/vue";

export default defineComponent({
  name: "admin-meals",
  components: {
    AdminHeader,
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonGrid,
    IonRow,
    IonAvatar,
    // IonText,
    IonButton,
    IonButtons,
    IonBackButton
  },
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Elira A.",
          isChecked: false,
        },
        {
          id: 2,
          name: "Leart B.",
          isChecked: true,
        },
        {
          id: 3,
          name: "Lis A.",
          isChecked: false,
        },
        {
          id: 4,
          name: "Maja L.",
          isChecked: false,
        },
      ],
      starOutline,
    };
  },
});
</script>
<style scoped>
.large {
  height: 25vw;
}
ion-card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: var(--ion-color-light);
  text-align: center;
  border-radius: 20px;
}
</style>
