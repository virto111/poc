import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'toolbar-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
})
export class ToolbarButtonComponent {
  @Input() label!: string;
  @Input() icon?: string;

  @Output() click = new EventEmitter<void>();
}
