function Component(props) {
    this.val = props
    function getter() {
        // console.log("Get Component")
    }

    function setter() {
        // console.log("Set Component")
    }

    function create(domPayload) {
        if (!domPayload) return;

        while (true) {

        }

    }

    return {
        getter,
        setter,
        create
    }
}