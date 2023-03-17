<template>
  <div>
    <listmemo />
    <button href="#" class="grid my-4 w-1/2 mx-auto btn-info btn">
      lihat lebih</button
    >maksimal kalo di klik tambah 5 lagi
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import listmemo from './components/listmemo.vue';

const router = useRouter();
const movePage = (to) => router.push({ name: to });
</script>
