<template>
    <select @change="onChange($event)">
        <option v-for="(option, i) in options" :key="i" :value="option">{{option}}</option>
    </select>
</template>

<script>
export default {
  name: 'Select',
  props:{
    options:Array,
    width:{
        type:String,
        default: 'auto',
        required: false,
    },
    height:{
        type:String,
        default: 'auto',
        required: false,
    },
    max_width:{
        type:String,
        default: 'auto',
        required: false,
    },
    max_height:{
        type:String,
        default: 'auto',
        required: false,
    }
  },
  methods:{
      onChange:function(event){
          this.$emit('newValue',event.target.value);
      }
  }
}
</script>


<style scoped>
select {
  /* Reset */
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: 20em;
  height: 3em;
  padding: 0 4em 0 1em;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #20212b;
  color: white;
  border-radius: 25px;
  border: 2px solid #2d303d;
  cursor: pointer;
}
select option {
  color: inherit;
  background-color: #20212b;
}
option:hover {
    color:black;
  background-color: var(--secondary-color);
}
select:focus {
  outline: none;
}
select::-ms-expand {
  display: none;
}
select::-webkit-scrollbar {
  width: 5px;
}
select::-webkit-scrollbar-thumb {
  background-color: var(--secondary-color)
}
</style>
