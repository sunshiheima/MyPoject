<template>
    <div class="root1">
    <SlickList
      axis="x"
      lockAxis="x"
      v-model="items"
      class="SortableList"
    >
      <SlickItem
        v-for="(item, index) in items"
        class="SortableItem"
        :index="index"
        :key="index"
      >
        <div class="item-name">{{ item.name }}</div>
        <div class="root2">
          <SlickList
            :lockToContainerEdges="true"
            class="list"
            lockAxis="y"
            v-model="item.itemArr"
          >
            <SlickItem
              class="list-item"
              v-for="(item, index) in item.itemArr"
              :index="index"
              :key="index"
            >
              {{ item }}
            </SlickItem>
          </SlickList>
        </div>
      </SlickItem>
    </SlickList>
  </div>

</template>
<script>
  import { SlickList, SlickItem } from 'vue-slicksort'  // 引入
export default {
  name: 'Example',
  components: {
    SlickItem,
    SlickList
  },
  data() {
    return {
      flag: true,
      items: [
        {
          name: 'Tab-1',
          itemArr: ['1-1', '1-2', '1-3']
        },
        {
          name: 'Tab-2',
          itemArr: ['2-1', '2-2', '2-3']
        },
        {
          name: 'Tab-3',
          itemArr: ['3-1', '3-2', '3-3']
        },
        {
          name: 'Tab-3',
          itemArr: ['3-1', '3-2', '3-3']
        },
        {
          name: 'Tab-3',
          itemArr: ['3-1', '3-2', '3-3']
        },
        {
          name: 'Tab-3',
          itemArr: ['3-1', '3-2', '3-3']
        },
      ]
    }
  },
  methods: {
    getChangeLists(vals) {
      console.log(vals, 'vals')
    }
  }
}
</script>

<style>
.root1 {
  width: 800px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
}
.root2 {
  display: flex;
  height: 100%;
}
.list {
  max-height: 140px;
  margin: 0 auto;
  padding: 0;
  overflow: auto;
  background-color: #f3f3f3;
  border: 1px solid #efefef;
  border-radius: 3;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  user-select: none;
  color: #333;
  font-weight: 400;
}
.stylizedHelper {
  background: blue;
  color: #fff;
}
.SortableList {
  display: flex;
  width: 606px;
  white-space: nowrap;
  max-height: 80vh;
  margin: 0 auto;
  padding: 0;
  overflow: auto;

  border-radius: 3;
}
.SortableItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  user-select: none;
  color: #333;
  font-weight: 400;
}

.item-name {
  background: #5eb685;
  padding: 20px 0;
  color: #fff;
  width: 200px;
  text-align: center;
}

</style>