import { Component } from '@angular/core';
import { DynamicComponentRenderer } from '../../widget/dynamic-renderer.component';
import { TOOLBAR_COMPONENTS } from '../../widget/toolbar.registry';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'toolbar-three',
  templateUrl: './toolbar-w-three.component.html',
  imports: [ToolbarModule],
})
export class ToolbarWidgetThreeComponent extends DynamicComponentRenderer {
  protected getComponentRegistry() {
    return TOOLBAR_COMPONENTS;
  }
}
