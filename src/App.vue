<template>
  <v-app max-width="960">
    <router-view></router-view>
  </v-app>

  <!--<v-app>
    <v-main id="main app">
      &lt;!&ndash; 여기에 라우터가 컴포넌트를 그린다 &ndash;&gt;
      <router-view></router-view>
    </v-main>
  </v-app>-->
</template>

<script>

// import Index from "@/views/Index";
// import HelloWorld from './components/HelloWorld';
// import LinkInfos from "@/components/LinkInfos";
// import Test from './components/Test'

export default {
  name: 'App',
  // components: {
  //   Index,
  //   // LinkInfos,
  //   // HelloWorld,
  // },

  data: () => ({
    //
  }),
};
</script>
