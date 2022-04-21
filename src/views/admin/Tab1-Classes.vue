<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="item in classes" :key="item.name">
            <ion-button color="blue" class="large" size="large" expand="block" :router-link="`classes/${item.name}`">Grupi <br /> {{item.name}}</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "admin-classes",
  components: { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton },
  computed: {
    classes(){
      return this.$store.getters.classes;
    }
  }
});
</script>
<style>
.large {
  height: 22.5vW;
}
</style>
