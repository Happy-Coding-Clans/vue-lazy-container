import "intersection-observer";

export default {
    name: "vue-lazy-container",
    props: {
        // container tag name
        tagName: {
            type: String,
            required: true
        },
        // id
        id: {
            type: [String, Number],
            default: ""
        },
        // IntersectionObserver option
        intersectionOption: {
            type: Object,
            default: null
            /*
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0
            */
        }
    },
    data() {
        return {
            observer: null
        };
    },
    watch: {
        // intersectionOption watch
        intersectionOption: {
            handler: function() {
                this.destroyObserver();
                this.createObserver();
            },
            deep: true
        }
    },
    methods: {
        // create observer
        createObserver() {
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    this.$emit("change", entry, observer, this.id);
                });
            };

            const options = this.intersectionOption;

            this.observer = new IntersectionObserver(callback, options);

            this.observer.observe(this.$el);
        },

        // is support IntersectionObserver
        isSupport() {
            if (
                !("IntersectionObserver" in window) ||
                !("IntersectionObserverEntry" in window) ||
                !(
                    "intersectionRatio" in
                    window.IntersectionObserverEntry.prototype
                )
            ) {
                console.warn(
                    "Your browser does not support IntersectionObserver!"
                );
            }
        },

        // destroy observer
        destroyObserver() {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        }
    },
    mounted() {
        this.isSupport();
        this.createObserver();
    },
    beforeDestroy() {
        this.destroyObserver();
    },
    render() {
        return <this.tagName>{this.$slots.default}</this.tagName>;
    }
};
