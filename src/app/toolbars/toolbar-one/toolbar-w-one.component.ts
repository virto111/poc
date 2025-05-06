import {
  Input,
  ViewChild,
  Component,
  AfterViewInit,
  ViewContainerRef,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TOOLBAR_COMPONENTS } from '../../widget/toolbar.registry';
import { ToolbarComponentType } from '../../models';

export interface ToolbarConfigItem {
  id?: string;
  componentType: ToolbarComponentType;
  inputs?: Record<string, any>;
  outputs?: Record<string, any>;
  children?: ToolbarConfigItem[];
}

@Component({
  selector: 'toolbar-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar-w-one.component.html',
})
export class ToolbarOneComponent implements AfterViewInit {
  @Input() config: ToolbarConfigItem[] = [];
  @Input() inputBindings: Record<string, any> = {};
  @Input() outputBindings: Record<string, Function> = {};

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  ngAfterViewInit() {
    for (const item of this.config) {
      const cmpType = TOOLBAR_COMPONENTS[item.componentType];
      const cmpRef = this.container.createComponent<any>(cmpType);

      // * bind @Inputs()
      for (const [key, token] of Object.entries(item.inputs ?? {})) {
        cmpRef.setInput?.(key, this.inputBindings[token as string] ?? token);
      }

      // * bind @Outputs()
      for (const [event, handlerName] of Object.entries(item.outputs ?? {})) {
        cmpRef.instance[event]?.subscribe?.((val: any) => {
          this.outputBindings[handlerName as string]?.(val);
        });
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && !changes['config'].firstChange) {
      this.rebuildComponents();
    }
  }

  private rebuildComponents() {}
}
