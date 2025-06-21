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

    // * bind @Inputs() - direct values only
    if (item.inputs) {
      for (const [key, value] of Object.entries(item.inputs)) {
        componentRef.setInput(key, value);
      }
    }

    // * bind @Outputs() - direct function handlers only
    if (item.outputs) {
      for (const [eventName, handler] of Object.entries(item.outputs)) {
        if (componentRef.instance[eventName] && typeof handler === 'function') {
          componentRef.instance[eventName].subscribe(handler);
        }
      }
    }

    // ! Handle nested components if needed... some days
    if (item.children && item.children.length > 0) {
    }
  }

  protected rebuildComponents() {
    if (!this.container) return;

    this.container.clear();
    this.renderComponents();
  }
}
