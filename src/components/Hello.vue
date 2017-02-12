<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <slot>
      <h3>Empty Slot</h3>
    </slot>
    <slot name="p-slot"></slot>
    <div class="box">
      <div class="item red">
        1111
      </div>
      <div class="item blue">
        222
      </div>
      <div class="item black">
        333
      </div>
      <div class="item red">
        444
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style="sass">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.red{
  background: red;
  height: 100px;
  /*order: 1;*/
  /*flex-grow: 3;*/

}
.blue{
  background: blue;
  height: 50px;
  /*order: 2;*/
  /*flex-grow: 2;*/
}
.black{
  background: black;
  height: 200px;
  /*order: 3;*/
  /*flex-grow: 1;*/
  /*flex-basis: 50px;*/
}

.item{
  flex: 0 0 50%;
}


  .box{
    height: 200px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /*flex-direction: row;*/
    /*flex-wrap: nowrap;*/
    /*flex-flow: row-reverse nowrap;*/
    /*justify-content: space-around;*/
    /*align-items: stretch;*/
    /*align-content: center;*/
  }
</style>
