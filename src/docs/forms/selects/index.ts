import Component from 'vue-class-component';

import mdSelect from '../../../components/form/select';
import mdOption from '../../../components/form/option';
import mdOptgroup from '../../../components/form/optgroup';

@Component({
    components: {
        mdSelect,
        mdOption,
        mdOptgroup
    },
    template: require('./selects.html')
})
export default class Selects {

    data() {
        return {
            value: '',
            multipleValue: ['1', '3'],
            groupsValue: '1',
        }
    }
}

