import { TOOLBAR_COMPONENTS } from './widget/toolbar.registry';

export type ToolbarComponentType = keyof typeof TOOLBAR_COMPONENTS;

export interface ToolbarConfigItem {
  id?: string;
  componentType: ToolbarComponentType;
  inputs?: Record<string, any>;
  outputs?: Record<string, any>;
}

export interface DynamicConfigItem extends ToolbarConfigItem {
  children?: DynamicConfigItem[];
}
