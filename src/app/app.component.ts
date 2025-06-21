import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarWidgetTwoComponent } from './toolbars/toolbar-two/toolbar-w-two.component';
import { ToolbarWidgetThreeComponent } from './toolbars/toolbar-three/toolbar-w-three.component';
import { DynamicConfigItem } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    ToolbarWidgetTwoComponent,
    ToolbarWidgetThreeComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  toolbarConfig_two: DynamicConfigItem[] = [
    {
      id: 'filter',
      componentType: 'dropdown',
      inputs: {
        label: 'Category 1',
        options: [
          { label: 'Ala bala', value: 'alaa' },
          { label: 'Tech', value: 'tech' },
          { label: 'Sports', value: 'sports' },
          { label: 'Sports 2', value: 'sports2' },
        ],
        selected: 'alabala',
      },
      outputs: {
        selectionChange: (val: string) =>
          console.log(
            '%c LAYOUT_TWO New category: ' + val,
            'background: white; color: green; font-weight: bold;'
          ),
      },
    },
    {
      id: 'refresh',
      componentType: 'button',
      inputs: { label: 'Refresh', icon: 'refresh' },
      outputs: {
        click: () =>
          console.log(
            '%c Refreshing LAYOUT_TWO ... ',
            'background: white; color: green; font-weight: bold;'
          ),
      },
    },
    {
      id: 'editMode',
      componentType: 'checkbox',
      inputs: { label: 'Edit Mode', checked: true },
      outputs: {
        change: (checked: boolean) =>
          console.log(
            '%c Edit mode: ' + checked,
            'background: white; color: green; font-weight: bold;'
          ),
      },
    },
  ];

  toolbarConfig_three: DynamicConfigItem[] = [
    {
      id: 'editMode',
      componentType: 'checkbox',
      inputs: { label: 'Edit Mode', checked: false },
      outputs: {
        change: (checked: boolean) =>
          console.log(
            '%c Edit mode: ' + checked,
            'background: white; color: blue; font-weight: bold;'
          ),
      },
    },
    {
      id: 'darkMode',
      componentType: 'slideToggle',
      inputs: { label: 'Dark Mode', checked: false, color: 'accent' },
      outputs: {
        change: (checked: boolean) =>
          console.log(
            '%c Dark mode: ' + checked,
            'background: white; color: blue; font-weight: bold;'
          ),
      },
    },
    {
      id: 'filter',
      componentType: 'dropdown',
      inputs: {
        label: 'Category',
        options: [
          { label: 'News', value: 'news' },
          { label: 'Tech', value: 'tech' },
          { label: 'Sports', value: 'sports' },
        ],
        selected: 'news',
      },
      outputs: {
        selectionChange: (val: string) =>
          console.log(
            '%c LAYOUT_THREE New category: ' + val,
            'background: white; color: blue; font-weight: bold;'
          ),
      },
    },
    {
      id: 'refresh',
      componentType: 'button',
      inputs: { label: 'Refresh', icon: 'refresh' },
      outputs: {
        click: () =>
          console.log(
            '%c Refreshing LAYOUT_THREE ... ',
            'background: white; color: blue; font-weight: bold;'
          ),
      },
    },
  ];
}
