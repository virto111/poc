import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toolbar-slide-toggle',
  standalone: true,
  imports: [CommonModule, InputSwitchModule, FormsModule],
  templateUrl: './slide-toggle.component.html',
})
export class ToolbarSlideToggleComponent {
  @Input() label!: string;
  @Input() checked = false;

  @Output() change = new EventEmitter<boolean>();
}
