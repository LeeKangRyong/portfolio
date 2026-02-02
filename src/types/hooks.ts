export type AssetType = 'skills' | 'projects';

export interface UseAssetsReturn {
  assets: Record<string, string>;
}

export interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface UseHoverReturn {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
