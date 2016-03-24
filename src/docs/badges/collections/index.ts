import Component from 'vue-class-component';

import components from '../../../components';
import directives from '../../../directives';

@Component({
    components: components,
    directives: directives,
    template: require('./collections.html')
})
export default class Collections {
    data() {
        return {
            alert: 'new'
        }
    }
}

