import "intersection-observer";

export default {
    name: "vue-lazy-container",
    props: {
        // container tag name
        tagName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            observer: null
        };
    },
    methods: {
        init() {
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    this.$emit("change", entry, observer);
                });
            };

            const options = {
                /* root: document.querySelector("#scrollArea"),
                rootMargin: "0px",
                threshold: 1.0 */
            };

            this.observer = new IntersectionObserver(callback, options);

            this.observer.observe(this.$el);
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    },
    render() {
        return <this.tagName>{this.$slots.default}</this.tagName>;
    }
};
