<template>
  <div class="contact">
    <h2>Lorem ipsum</h2>
    <p>{{ descript }}</p>
    <p>{{ descript }}</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => {
    return {
      descript:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
};
</script>

<style lang="scss">
.contact {
  max-width: 600px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 20px 50px;
  border: 1px solid black;
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
}
.h2 {
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 700;
}
.p {
  font-size: 10px;
  text-align: left;
}
</style>
