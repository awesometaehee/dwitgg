<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-subheader>ADMIN</v-subheader>
        <v-list-item-group v-model="selectedItem" color="indigo">
          <v-list-item v-for="(item, i) in items" :key="i" @click="navigateTo(item)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="btn-area">
        <v-btn color="#3964c3" elevation="2">
          메인으로
        </v-btn>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    name: 'menus',
    data: () => ({
      selectedItem: 0,
      items: [
        {text: '상품관리', icon: '🛒', path: '/'},
        {text: '주문관리', icon: '📰', path: '/OrderMng'},
        // {text: '통계분석', icon: '📊', path: '/'},
      ],
    }),
    methods: {
      navigateTo(item) {
        if(this.$route.path != item.path){
          // 라우터에 경로 추가
          this.$router.push(item.path);
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-icon.v-icon {
    font-style: normal;
  }

  .v-navigation-drawer {
    .v-navigation-drawer__content {
      display:flex;
      flex-direction:column;

      .v-list {
        flex: 1 1 auto;
      }
      
      .btn-area {
        width: 100%;
        text-align:center;

        button {
          width:80%;
          height:40px;
          border-radius:5px;
          margin-bottom:20px;
          color:#fff;
        }
      }
    }
  }
</style>