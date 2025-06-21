import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'toolbar-slide-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
})
export class ToolbarSlideToggleComponent {
  @Input() label!: string;
  @Input() checked = false;
  @Input() color?: 'primary' | 'accent' | 'warn' = 'warn';

  @Output() change = new EventEmitter<boolean>();
}
