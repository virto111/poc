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

import { LAYOUT_ONE } from './widget/toolbar.config';
import { ToolbarOneComponent } from './toolbars/toolbar-one/toolbar-w-one.component';

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
    ToolbarOneComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  toolbarConfig = LAYOUT_ONE;

  inputs = {
    editMode: false,
    selectedCategory: 'news',
    categories: [
      { label: 'News', value: 'news' },
      { label: 'Tech', value: 'tech' },
      { label: 'Sports', value: 'sports' },
    ],
  };

  outputs = {
    refreshData: () => console.log('Refreshing...'),
    toggleEditMode: (checked: boolean) => console.log('Edit mode:', checked),
    changeCategory: (val: string) => console.log('New category:', val),
  };
}
