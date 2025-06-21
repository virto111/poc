import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toolbar-checkbox',
  standalone: true,
  imports: [CommonModule, CheckboxModule, FormsModule],
  templateUrl: './checkbox.component.html',
})
export class ToolbarCheckboxComponent {
  @Input() label!: string;
  @Input() checked = false;

  @Output() change = new EventEmitter<boolean>();
}
