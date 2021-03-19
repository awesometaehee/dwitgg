<template>
  <div class="wrap">
    <menus></menus>
    <v-main>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="productItem"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>상품 관리</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="700px">
                <template v-slot:activator="{on, attrs}">
                  <v-btn
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    상품 등록
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">상품 등록</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field color="#000" label="상품명" dense></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea color="#000" label="상품설명" outlined dense></v-textarea>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field color="#000" label="상품금액" dense></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-select
                            color="#000"
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="카테고리"
                            dense
                            require
                          ></v-select>
                        </v-col>
                        <v-col cols="12">
                          <v-file-input color="#000" truncate-length="15" dense></v-file-input>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" depressed @click="dialog = false">등록</v-btn>
                      <v-btn color="error" depressed @click="dialog = false">취소</v-btn>
                    </v-card-actions>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-toolbar>
              <v-text-field
                v-model="search"
                append-icon="mdi-account-search"
                label="Search"
                single-line
                hide-details
                class="search-bar"
              ></v-text-field>
          </template>
        </v-data-table>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import Menus from '../components/Menus.vue';

export default {
  name: 'productMng',
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      {text:'상품명' , value:'productName'},
      {text:'상품설명' , value:'desc'},
      {text:'카테고리' , value:'category'},
      {text:'상품금액' , value:'pmt'},
      {text:'상품이미지' , value:'image'},
      {text:'등록일' , value:'reDate'},
      {text:'재고수량' , value:'stock'},
      {text:'수정삭제' , value:'modiOrDel'},
    ],
    productItem: [
      {
        productName: '상품명상품명',
        desc: '설명설명설명설명설명설명설명',
        category: '드롭다운',
        pmt: '20,000',
        image: '상세보기 링크',
        reDate: '2021.03.17',
        stock: '213',
        modiOrDel: 'ㅁ/ㅇ'
      },
      {
        productName: '그런슬픈말은하지마요',
        desc: '설명설명설명설명설명설명설명',
        category: '드롭다운',
        pmt: '20,000',
        image: '상세보기 링크',
        reDate: '2021.03.17',
        stock: '213',
        modiOrDel: 'ㅁ/ㅇ'
      },
    ]
  }),
  components: {
    Menus
  }
}
</script>

<style lang="scss">
  table tr td {
    text-align:center;
  }

  .search-bar {
    width:30%;
    padding:0 20px;
    margin-left:auto;
  }
</style>
