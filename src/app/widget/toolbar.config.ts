import { ToolbarComponentType } from '../models';

export const LAYOUT_ONE = [
  {
    id: 'refresh',
    componentType: 'button' as ToolbarComponentType,
    inputs: { label: 'Refresh', icon: 'refresh' },
    outputs: { click: 'refreshData' },
  },
  {
    id: 'editMode',
    componentType: 'checkbox' as ToolbarComponentType,
    inputs: { label: 'Edit Mode', checked: 'editMode' },
    outputs: { change: 'toggleEditMode' },
  },
  {
    id: 'filter',
    componentType: 'dropdown' as ToolbarComponentType,
    inputs: {
      label: 'Category',
      options: 'categories',
      selected: 'selectedCategory',
    },
    outputs: { selectionChange: 'changeCategory' },
  },
];
