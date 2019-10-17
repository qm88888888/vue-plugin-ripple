import { Vue } from 'vue-property-decorator';
import { IRippleOpts } from 'types/index.d';
import Ripple from './directive';

export default {
  install(instance: typeof Vue, options: IRippleOpts) {
    /* eslint-disable no-param-reassign */
    options = options || { name: 'ripple' };
    instance.directive(options.name, new Ripple().install(options));
  },
};
