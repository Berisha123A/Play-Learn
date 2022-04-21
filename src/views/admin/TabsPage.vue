<template>
  <ion-page>
    <admin-header>
        <ion-avatar slot="start" class="ion-margin-end">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU"
          />
        </ion-avatar>
        <ion-label>
          <h2>Emri Mbiemri</h2>
        </ion-label>
        <ion-buttons slot="end">
          <ion-button size="small" color="success" fill="outline"
            >Close It</ion-button
          >
        </ion-buttons>
      <!-- <template v-slot:start>
        <ion-back-button>Back</ion-back-button>
      </template> -->
    </admin-header>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="adminTab1" href="/admin/classes">
            <ion-icon :icon="checkboxOutline" />
            <ion-label>Classrooms</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/admin/settings">
            <ion-icon :icon="ellipse" />
            <ion-label>Reports</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/admin/manage">
            <ion-icon :icon="square" />
            <ion-label>Manage</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonContent,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, square, checkboxOutline, star } from "ionicons/icons";
import AdminHeader from "../../components/AdminHeader.vue";

export default defineComponent({
  name: "AdminTabsPage",
  components: {
    AdminHeader,
    IonRouterOutlet,
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    return {
      ellipse,
      square,
      checkboxOutline,
      star,
    };
  },
});
</script>
<style>
.successShade {
  color: var(--ion-color-success-shade);
}
</style>
