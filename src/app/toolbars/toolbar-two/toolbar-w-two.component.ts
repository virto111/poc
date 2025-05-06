import { Component } from '@angular/core';
import { DynamicComponentRenderer } from '../../widget/dynamic-renderer.component';
import { TOOLBAR_COMPONENTS } from '../../widget/toolbar.registry';

@Component({
  selector: 'toolbar-two',
  templateUrl: './toolbar-w-two.component.html',
})
export class ToolbarWidgetTwoComponent extends DynamicComponentRenderer {
  protected getComponentRegistry() {
    return TOOLBAR_COMPONENTS;
  }
}
