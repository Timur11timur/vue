<template>
  <div>
    <h2>The Count Is: {{ count}}</h2>
    <p>
      <button @click="count += 1">Incriment</button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      };
    }
  }
</script>
