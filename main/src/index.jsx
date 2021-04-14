import IntersectionObserver from "intersection-observer";

export default {
    name: "vue-lazy-container",
    props: {
        tagName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            className: "vue__lazy__container"
        };
    },
    mounted() {
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                this.$emit("change", entry, observer);
            });
        };

        let options = {
            /* root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0 */
        };

        let observer = new IntersectionObserver(callback, options);

        let target = this.$el.querySelector(`.${this.className}`);

        observer.observe(target);
    },
    render() {
        const { className } = this;
        const props = {
            class: className
        };

        return <this.tagName {...props}>{this.$slots.default}</this.tagName>;
    }
};
