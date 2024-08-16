<script setup lang="ts">
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from "../../modules/firebase/firebase.ts";
import PictureComponent from "../Base/PictureComponent.vue";
import {reactive} from "vue";

const db = getFirestore(firebaseApp);

const product = reactive({
  gender: '',
  label: '',
  name: '',
  img: {},
  price: {},
  colors: [],
  description: ''
});

async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, 'sneakers'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      Object.assign(product, data);
      console.log(data);
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData();
</script>

<template>
  <div v-if="product.img">
    <PictureComponent :srcset="product.img.webP" :src="product.img.default" alt="sneakers" />
  </div>

</template>

<style scoped>

</style>
