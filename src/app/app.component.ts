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

import { LAYOUT_THREE, LAYOUT_TWO } from './widget/toolbar.config';
import { ToolbarWidgetTwoComponent } from './toolbars/toolbar-two/toolbar-w-two.component';
import { ToolbarWidgetThreeComponent } from './toolbars/toolbar-three/toolbar-w-three.component';

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
  toolbarConfig_two = LAYOUT_TWO;
  toolbarConfig_three = LAYOUT_THREE;

  inputs_two = {
    editMode: false,
    selectedCategory: 'news',
    categories: [
      { label: 'Ala aala', value: 'alaa' },
      { label: 'Tech', value: 'tech' },
      { label: 'Sports', value: 'sports' },
      { label: 'Sports 2', value: 'sports2' },
    ],
  };

  outputs_two = {
    refreshData: () =>
      console.log(
        '%c Refreshing LAYOUT_TWO ... ',
        'background: white; color: green; font-weight: bold;'
      ),
    toggleEditMode: (checked: boolean) =>
      console.log(
        '%c Edit mode: ' + checked,
        'background: white; color: green; font-weight: bold;'
      ),
    changeCategory: (val: string) =>
      console.log(
        '%c LAYOUT_TWO New category: ' + val,
        'background: white; color: green; font-weight: bold;'
      ),
    changeCategory2: (val: string) =>
      console.log(
        '%c LAYOUT_TWO New category 2: ' + val,
        'background: white; color: green; font-weight: bold;'
      ),
  };

  inputs_three = {
    editMode: false,
    darkMode: false,
    selectedCategory: 'news',
    categories: [
      { label: 'News', value: 'news' },
      { label: 'Tech', value: 'tech' },
      { label: 'Sports', value: 'sports' },
    ],
  };

  outputs_three = {
    refreshData: () =>
      console.log(
        '%c Refreshing LAYOUT_THREE ... ',
        'background: white; color: blue; font-weight: bold;'
      ),
    toggleEditMode: (checked: boolean) =>
      console.log(
        '%c Edit mode: ' + checked,
        'background: white; color: blue; font-weight: bold;'
      ),
    toggleDarkMode: (checked: boolean) =>
      console.log(
        '%c Dark mode: ' + checked,
        'background: white; color: blue; font-weight: bold;'
      ),
    changeCategory: (val: string) =>
      console.log(
        '%c LAYOUT_THREE New category: ' + val,
        'background: white; color: blue; font-weight: bold;'
      ),
  };
}
