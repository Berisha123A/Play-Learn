<template>
<ion-page>
  <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button class="large" size="large" expand="block" href="admin/settings/students">Evidenca e femijeve</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button class="large" size="large" expand="block">Evidenca e stafit</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
  </ion-content>
</ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage,IonContent} from "@ionic/vue";

export default defineComponent({
  name: "admin-settings",
  components: { IonPage, IonContent },
  data(){
    return{
      activities:[
        {
          name: 'Outdoor Activity: Running Game',
          period: '9:00 - 10:30',
          img: ''
        },
        {
          name: "I'm doing pumpkin cookies today",
          period: '10:00 - 11:30',
          img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F1512w-kid-cooking-pancakes-getty.jpg%3Fitok%3DDD_1JpC_"
        }
      ],
      meals:[
        {
          name: 'Jogurt me fruta mali',
          period: '11:00 - 11:30',
          img: ''
        },
      ]
    }
  }
});
</script>
