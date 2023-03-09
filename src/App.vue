<template>
<!--  <v-app>-->

<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->

<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->

<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--        text-->
<!--      >-->
<!--        <span class="mr-2">로그인</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

<!--    <v-main>-->
<!--      -->
<!--    </v-main>-->
<!--  </v-app>-->
  <div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

// import AppLogin from "@/components/AppLogin";
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px rgba(0, 0, 0, 0.03);
}

</style>