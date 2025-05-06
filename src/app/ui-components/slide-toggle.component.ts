import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toolbar-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
})
export class ToolbarSlideToggleComponent {
  @Input() label!: string;
  @Input() checked = false;
  @Input() color?: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() change = new EventEmitter<boolean>();
}
