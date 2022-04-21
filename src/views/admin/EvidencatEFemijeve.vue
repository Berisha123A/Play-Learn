<template>
  <ion-page>
    <admin-header>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/admin"></ion-back-button>
      </ion-buttons>
      <ion-title>Evidencat e Femijeve</ion-title>
    </admin-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img src="../../../resources/avatar-rey.png" />
          </ion-avatar>
          <ion-label>
            <h2>Emri Mbiemri</h2>
            <p>Jo Prezent</p>
          </ion-label>
          <ion-buttons slot="end">
            <ion-button color="success" fill="solid">
              <ion-icon :icon="logInOutline" />
            </ion-button>
            <ion-button color="medium" fill="solid">
              <ion-icon :icon="calendarOutline" />
            </ion-button>
          </ion-buttons>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="../../../resources/avatar-rey.png" />
          </ion-avatar>
          <ion-label>
            <h2>Emri Mbiemri</h2>
            <ion-text color="success">8:30 - </ion-text>
          </ion-label>
          <ion-buttons slot="end">
                        <ion-button color="danger" fill="solid">
              <ion-icon :icon="logOutOutline" />
            </ion-button>
          </ion-buttons>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img src="../../../resources/avatar-rey.png" />
          </ion-avatar>
          <ion-label>
            <h2>Emri Mbiemri</h2>
            <ion-text color="danger">8:30 - 11:00</ion-text>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { logInOutline, calendarOutline, logOutOutline } from "ionicons/icons";
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
  IonIcon,
} from "@ionic/vue";
import AdminHeader from "../../components/AdminHeader.vue";

export default defineComponent({
  name: "admin-evidencat-e-femijeve",
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
    IonIcon,
  },
  data() {
    return {
      // Icons
      logInOutline,
      calendarOutline,
      logOutOutline
    };
  },
});
</script>
