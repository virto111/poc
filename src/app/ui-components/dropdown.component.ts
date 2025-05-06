import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'toolbar-dropdown',
  standalone: true,
  imports: [MatSelectModule, NgForOf],
  templateUrl: './dropdown.component.html',
})
export class ToolbarDropdownComponent {
  @Input() label!: string;
  @Input() selected!: any;
  @Input() options: Array<{ label: string; value: any }> = [];

  @Output() selectionChange = new EventEmitter<any>();
}
