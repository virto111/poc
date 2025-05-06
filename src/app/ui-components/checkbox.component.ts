import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-toolbar-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
})
export class ToolbarCheckboxComponent {
  @Input() label!: string;
  @Input() checked = false;

  @Output() change = new EventEmitter<boolean>();
}
