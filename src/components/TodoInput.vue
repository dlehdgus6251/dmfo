<template>
<div class="inputBox">
  <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>

  <span class="addContainer" v-on:click="addTodo">
    <i class="fas fa-plus addBtn"></i>
  </span>
  <app-modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">
      WARNING
      <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
    </h3>
    <div slot="body">
      내용을 채워 주세요
    </div>
  </app-modal>

</div>
</template>

<script>
import AppModal from "@/components/common/AppModal.vue";
export default {
  data: function () {
    return{
      newTodoItem: '',
      showModal: false
    }
  },
  methods:{
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    AppModal
  },

};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>