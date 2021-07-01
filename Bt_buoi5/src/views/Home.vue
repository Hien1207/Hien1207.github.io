
<template>
  <div class="todo" id="todo">
    <h1>Todo List</h1>
    <input
      type="text"
      v-model="currentInput"
      placeholder="What needs to be done?"
      @keyup.enter="add"
    />
    <button v-on:click="add">></button>
    <li v-for="item in todo" :key="item" v-on:click="complete(item)">
      <input class="check" type="checkbox" v-bind:checked="item.isComplete" />
      <span v-bind:class="{ completed: item.isComplete }">{{ item.name }}</span>
      <div class="btn" v-on:click="complete(item)">
        <button v-on:click="edit(item)" class="btnedit">Edit</button>
        <button v-on:click="remove(item)" class="btndel">Del</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return {
      currentInput: "",
      todo: [],
    };
  },
  methods: {
    add() {
      if (this.currentInput !== " ") {
        if (this.editing) {
          (this.editingId.name = this.currentInput),
            (this.currentInput = null),
            (this.editing = false);
        } else {
          if (!this.todo.find((item) => item.name === this.currentInput)) {
            this.todo.push({
              name: this.currentInput,
              isComplete: false,
            });
            this.currentInput = null;
          } else {
            alert("Da co roi"), (this.currentInput = null);
          }
        }
      }
    },
    complete(item) {
      item.isComplete = !item.isComplete;
    },
    edit(item) {
      (this.currentInput = item.name),
        (this.editing = true),
        (this.editingId = item);
    },
    remove(item) {
      const itemindex = this.todo.findIndex((i) => i.name === item.name);
      if (itemindex >= 0) {
        this.todo[itemindex].done = !this.todo.splice(itemindex, 1);
      }
    },
  },
};
</script>
<style lang="scss">
.todo {
  background: white;
  width: 450px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid black;
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
}
div input {
  width: 80%;
  height: 25px;
  border: none;
  border-bottom: 2px solid rgb(6, 129, 82);
}
div button {
  width: 40px;
  height: 30px;
  font-size: 20px;
  margin: 4px;
  color: rgb(6, 129, 82);
}
div li {
  width: 90%;
  height: 35px;
  display: flex;
  text-align: left;
  font-size: 17px;
  background: rgb(236, 250, 255);
  margin-left: 20px;
  list-style-type: none;
  margin-top: 8px;
}
div span {
  margin-top: 8px;
}
.check {
  width: 15%;
  font: 5px sans-serif;
}
.completed {
  text-decoration: line-through;
  color: #999999;
}
.btn {
  width: 400px;
  text-align: right;
}
.btnedit {
  font-size: 12px;
  background: rgb(109, 199, 145);
  color: white;
  width: 40px;
  height: 25px;
}
.btndel {
  font-size: 12px;
  background: red;
  color: white;
  width: 40px;
  height: 25px;
}
.btndel:hover,
.btnedit:hover {
  opacity: 0.6;
}
</style>

