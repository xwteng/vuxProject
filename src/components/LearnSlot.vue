<template>
    <section>
        <div class="parent">
            <learnSlotChild>
                <template scope="props">
                    <span>hello from parent</span>
                    <span>{{ props.text }}</span>
                </template>
            </learnSlotChild>
        </div>
    </section>
</template>
<script>
export default {
    components: {
        'learnSlotChild': require('./LearnSlotChild')
    }

}
</script>

