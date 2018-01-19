Shadow = function(element) {
    this.domElement = element;

    return {
        shadowSelector : function(args) {
            if(typeof args === 'string') {
                let selectors = args.split(' ');

                selectors.forEach(function(selector) {
                    let previousElement = domElement;
                    this.domElement = this.domElement
                    ? (this.domElement.shadowRoot || this.domElement).querySelector(selector)
                    : this.domElement;

                    this.domElement = this.domElement
                    ? this.domElement
                    : previousElement.querySelector(selector);
                });
            }

            return domElement;
        }
    }
}
