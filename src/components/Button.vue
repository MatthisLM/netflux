<template>
    <button type="button" class="btn btn-outline-primary fw-bold px-4 py-3" :href="link">
    <svg v-if="iconSvgPath" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill mr-2 mb-1" viewBox="0 0 16 16">
        <path :d="iconSvgPath"/>
    </svg>
    {{ text }}
    </button>
</template>

<script>
export default {
  name: 'Button',
  props:{
    text:String,
    link:String,
    iconSvgPath:String,
  },
}
</script>


<style scoped>
    button{
        font-family:'Poppins', sans-serif;
        text-transform: uppercase;
        color: white;
        border: 2px solid var(--secondary-color);
        border-radius:30px;
    }
    button:hover{
        background: #e4d804;
        border: 2px solid var(--secondary-color);
    }
</style>
