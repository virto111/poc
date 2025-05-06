import {
  AfterViewInit,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicConfigItem } from '../models';

@Directive()
export abstract class DynamicComponentRenderer
  implements AfterViewInit, OnChanges
{
  @Input() config: DynamicConfigItem[] = [];
  @Input() inputBindings: Record<string, any> = {};
  @Input() outputBindings: Record<string, Function> = {};

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  // * Registry access method - to be implemented by subclasses
  protected abstract getComponentRegistry(): Record<string, Type<any>>;

  ngAfterViewInit() {
    this.renderComponents();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && !changes['config'].firstChange) {
      this.rebuildComponents();
    }
  }

  protected renderComponents() {
    if (!this.container) return;

    for (const item of this.config) {
      this.renderComponent(item);
    }
  }

  protected renderComponent(item: DynamicConfigItem) {
    const registry = this.getComponentRegistry();
    const componentType = registry[item.componentType];

    if (!componentType) {
      console.warn(
        `Component type ${item.componentType} not found in registry`
      );
      return;
    }

    const componentRef = this.container.createComponent<any>(componentType);

    // * bind @Inputs()
    if (item.inputs) {
      for (const [key, value] of Object.entries(item.inputs)) {
        const inputValue =
          typeof value === 'string' && this.inputBindings[value] !== undefined
            ? this.inputBindings[value]
            : value;

        componentRef.setInput(key, inputValue);
      }
    }

    // * bind @Outputs()
    if (item.outputs) {
      for (const [eventName, handlerName] of Object.entries(item.outputs)) {
        if (
          typeof handlerName === 'string' &&
          componentRef.instance[eventName]
        ) {
          componentRef.instance[eventName].subscribe((val: any) => {
            this.outputBindings[handlerName]?.(val);
          });
        }
      }
    }

    // ! Handle nested components if needed... some day
    if (item.children && item.children.length > 0) {
    }
  }

  protected rebuildComponents() {
    if (!this.container) return;

    this.container.clear();
    this.renderComponents();
  }
}
