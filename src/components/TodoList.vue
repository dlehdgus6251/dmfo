<template>
<div>
  <ul>
    <li v-for="(todoItem, i) in todoItems" v-bind:key="todoItem" class="shadow" v-on:click="removeTodo(todoItem, i)">
      <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, i)"></i>
      <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
      <span class="removeBtn">
        <i class="fa-solid fa-trash-can" />
      </span>

    </li>

  </ul>
</div>
</template>

<script>
export default {
  data: function (){
    return{
      todoItems : []
    }
  },
  methods:{
    removeTodo: function (todoItem, i) {
      console.log(todoItem + i)
      localStorage.removeItem(todoItem)
      this.todoItems.splice(i,1)
    },
    toggleComplete: function (todoItem, i){
      console.log(todoItem + i)
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  },


  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  }


}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>