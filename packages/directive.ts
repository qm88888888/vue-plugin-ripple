import { DirectiveBinding } from 'vue/types/options.d';
import { IRippleOpts } from 'types/index.d';

export default class Directive {
  static options: IRippleOpts = {
    name: 'ripple',
    event: 'mousedown',
    transition: 600,
    color: 'rgba(0, 0, 0, 0.15)',
  };

  public install(options: IRippleOpts) {
    Directive.options = Object.assign({}, Directive.options, options);
    return {
      bind: (el: HTMLElement, bind: DirectiveBinding) => this.bind(el, bind),
    };
  }

  bind(el: HTMLElement, bind: DirectiveBinding) {
    if (bind.modifiers && bind.modifiers.click) {
      Directive.options.event = 'click';
    }
    if (bind.modifiers && bind.modifiers.mousedown) {
      Directive.options.event = 'mousedown';
    }
    if (bind.value) Directive.options.color = bind.value;
  }
}
