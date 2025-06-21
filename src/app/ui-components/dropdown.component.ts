import { CommonModule, NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toolbar-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule],
  templateUrl: './dropdown.component.html',
})
export class ToolbarDropdownComponent {
  @Input() label!: string;
  @Input() selected!: any;
  @Input() options: Array<{ label: string; value: any }> = [];

  @Output() selectionChange = new EventEmitter<any>();
}
