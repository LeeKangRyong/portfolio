import { useState, useEffect } from 'react';
import type { AssetType, UseAssetsReturn } from '@/types';

interface GlobModule {
  default: string;
}

const useAssets = (assetType: AssetType): UseAssetsReturn => {
  const [assets, setAssets] = useState<Record<string, string>>({});

  useEffect(() => {
    let assetModules: Record<string, GlobModule> = {};

    if (assetType === 'skills') {
      assetModules = import.meta.glob('/src/assets/skills/*.png', {
        eager: true,
      }) as Record<string, GlobModule>;
    } else if (assetType === 'projects') {
      assetModules = import.meta.glob('/src/assets/projects/**/*.png', {
        eager: true,
      }) as Record<string, GlobModule>;
    }

    const loadedAssets: Record<string, string> = {};

    Object.entries(assetModules).forEach(([path, module]) => {
      if (assetType === 'skills') {
        const fileName = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|gif|svg)$/, '') ?? '';
        loadedAssets[fileName] = module.default;
      } else if (assetType === 'projects') {
        const pathParts = path.split('/');
        const folderName = pathParts[pathParts.length - 2];
        const fileName = pathParts[pathParts.length - 1]?.replace(/\.(png|jpg|jpeg|gif|svg)$/, '');
        if (folderName && fileName) {
          const key = `${folderName}_${fileName}`;
          loadedAssets[key] = module.default;
        }
      }
    });
    setAssets(loadedAssets);
  }, [assetType]);

  return { assets };
};

export default useAssets;
