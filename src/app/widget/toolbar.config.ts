import { ToolbarComponentType } from '../models';

export const LAYOUT_TWO = [
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
  {
    id: 'refresh',
    componentType: 'button' as ToolbarComponentType,
    inputs: { label: 'Refresh', icon: 'refresh' },
    outputs: { click: 'refreshData' },
  },
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
];

export const LAYOUT_THREE = [
  {
    id: 'editMode',
    componentType: 'checkbox' as ToolbarComponentType,
    inputs: { label: 'Edit Mode', checked: 'editMode' },
    outputs: { change: 'toggleEditMode' },
  },
  {
    id: 'darkMode',
    componentType: 'slideToggle' as ToolbarComponentType,
    inputs: { label: 'Dark Mode', checked: 'darkMode', color: 'accent' },
    outputs: { change: 'toggleDarkMode' },
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
  {
    id: 'refresh',
    componentType: 'button' as ToolbarComponentType,
    inputs: { label: 'Refresh', icon: 'refresh' },
    outputs: { click: 'refreshData' },
  },
];
