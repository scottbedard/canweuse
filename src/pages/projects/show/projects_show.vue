<template>
    <main class="content margin padding">
        <h1>{{ project.name }}</h1>
    </main>
</template>

<script>
    import ProjectResource from 'resources/project';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                project: [],
            };
        },
    };
</script>
