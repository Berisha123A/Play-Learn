<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button class="large" expand="block" href="admin/manage/students">Menagjo Nxenesit</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button class="large" expand="block">Menagjo Grupmoshat</ion-button>
          </ion-col>
            <ion-col size="6">
            <ion-button class="large" expand="block" href="admin/manage/employees">Menagjo Stafin</ion-button>
          </ion-col>
            <ion-col size="6">
            <ion-button class="large" expand="block" router-link="manage/menu">Menagjo Menun</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent,IonGrid,IonRow,IonCol,IonButton } from "@ionic/vue";

export default defineComponent({
  name: "admin-manage",
  components: { IonPage, IonContent,IonGrid,IonRow,IonCol,IonButton },
  data() {
    return {};
  },
});
</script>
