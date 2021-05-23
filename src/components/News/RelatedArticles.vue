<template>
    <div id="related-topics" class="mt-5">
        <h3>Related Topics</h3>
        <div class="row">
            <div class="col-md-4" v-for="index in 3" :key="index">
                <div class="related-card">
                    <div class="related-card-inner">
                        <div class="related-bg">
                            <img class="w-100" src="https://picsum.photos/400/400/?image=20" alt="">
                        </div>
                        <div class="related-body">
                            <div class="related-category">Category</div>
                            <div class="related-title">New Artificial Intelligence Apps</div>
                            <a class="related-details">View Details <font-awesome-icon icon="arrow-right" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="d-block d-flex justify-content-end mt-2">View All <font-awesome-icon icon="arrow-right" /></a>
    </div>
</template>

<script>
export default({
    name: 'LatestNews',
})
</script>
