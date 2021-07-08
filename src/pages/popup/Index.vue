<template>
    <img alt="Vue logo" src="../../assets/logo.png" />
    {{ test }}
</template>

<script>
export default {
    setup() {
        const test = 'i am a test'
        return {
            test,
        }
    },
}
</script>

<style lang="scss">
#app {
    @apply bg-black-950;
    width: 600px;
    height: 600px;
}
</style>
