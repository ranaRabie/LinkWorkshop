<template>
    <footer id="main-footer">
        <section id="footer-wrap">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-2">
                        <ul class="list-unstyled">
                            <li><a href="">News</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Faqs</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <ul class="list-unstyled">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Complains</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h6 class="footer-tit">Subscribe to Newsletter</h6>
                        <div id="footer-form">
                            <form action="">
                                <input type="text" class="form-control">
                                <button class="btn btn-secondary btn-sm text-white">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h6 class="footer-tit">Follow us on</h6>
                        <div id="footer-social">
                            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
                            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
                            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
                            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']"/></a>
                            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="footer-copyright" class="bg-primary text-center text-white py-2">
            <div class="container">
                All rights reserved - Link Development Company &#169; 2020
            </div>
        </section>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>