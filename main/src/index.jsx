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
            ref: "vue-lazy-container-ref"
        };
    },
    mounted() {
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                this.$emit("change", entry);

                /* if (entry.isIntersecting) {
                    if (!this.isLoaded) {
                        console.log("entry::", entry);
                        this.$nextTick(() => {
                            this.renderChart();
                        });
                    } else {
                        this.isLoaded = true;
                    }
                } */

                // Each entry describes an intersection change for one observed
                // target element:
                //   entry.boundingClientRect
                //   entry.intersectionRatio
                //   entry.intersectionRect
                //   entry.isIntersecting
                //   entry.rootBounds
                //   entry.target
                //   entry.time
            });
        };

        let options = {
            /* root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0 */
        };

        let observer = new IntersectionObserver(callback, options);

        let target = this.$refs[this.ref];
        observer.observe(target);
    },
    render() {
        const { ref } = this;
        const props = {
            ref
        };

        return <this.tagName {...props}>{this.$slots.default}</this.tagName>;
    }
};
