<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="white" class="ion-padding-vertical">
        <ion-avatar slot="start" class="ion-margin-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGcFYBKGruads8sUVAfUBlX8orSdEwuSSTg&usqp=CAU"
          />
        </ion-avatar>
        <ion-label>
          <ion-text>
            <h2>
              <strong>Elira Abazi</strong>
            </h2>
          </ion-text>
          <ion-text color="medium">
            <p>Checked in at 8:30</p>
          </ion-text>
        </ion-label>
        <ion-buttons slot="end" class="ion-margin-end">
          <ion-button color="red" fill="solid" size="large">Pick Up</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>

        <ion-tab-bar slot="bottom" style="ion-justify-content-between">
          <ion-tab-button tab="tab1" href="/reports">
            <ion-icon :icon="home" />
            <ion-label>Sot</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tab2">
            <ion-icon :icon="todayOutline" />
            <ion-label>Raports</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tab3">
            <ion-icon :icon="settingsOutline" />
            <ion-label>Settings</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonToolbar,
  IonHeader,
  IonButtons,
  IonButton,
  IonContent,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
  IonAvatar,
  IonText,
  IonRouterOutlet,
} from "@ionic/vue";
import { todayOutline, settingsOutline, home } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonRouterOutlet,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonButton,
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonAvatar,
    IonText,
  },
  setup() {
    return {
      todayOutline,
      home,
      settingsOutline,
    };
  },
});
</script>
<style scoped>
ion-toolbar {
  --border-width: 0px;
}
.successShade {
  color: var(--ion-color-success-shade);
}
/* Bottom Bar */
ion-tab-bar {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: unset;
  padding: 10px;
  background-color: white;
}
ion-tab-button {
  margin: 24px;
  border-radius: 16px;
}
ion-tabs {
  background-color: white;
}
ion-tab-button {
  --background: white;
  /* --color-selected: var(--ion-color-primary); */
}
ion-tab-button.tab-selected {
  --background: var(--ion-color-red);
  --color-selected: var(--ion-color-light);
}
</style>
