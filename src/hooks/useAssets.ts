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
      assetModules = import.meta.glob('/src/assets/skills/*.svg', {
        eager: true,
      }) as Record<string, GlobModule>;
    }

    const loadedAssets: Record<string, string> = {};

    if (assetType === 'projects') {
      const pngModules = import.meta.glob('/src/assets/projects/**/*.png', {
        eager: true,
      }) as Record<string, GlobModule>;
      const webpModules = import.meta.glob('/src/assets/projects/**/*.webp', {
        eager: true,
      }) as Record<string, GlobModule>;

      [pngModules, webpModules].forEach((modules) => {
        Object.entries(modules).forEach(([path, module]) => {
          const pathParts = path.split('/');
          const folderName = pathParts[pathParts.length - 2];
          const fileName = pathParts[pathParts.length - 1]?.replace(
            /\.(png|jpg|jpeg|gif|svg|webp)$/,
            '',
          );
          if (folderName && fileName) {
            loadedAssets[`${folderName}_${fileName}`] = module.default;
          }
        });
      });
    } else {
      Object.entries(assetModules).forEach(([path, module]) => {
        const fileName =
          path
            .split('/')
            .pop()
            ?.replace(/\.(png|jpg|jpeg|gif|svg)$/, '') ?? '';
        loadedAssets[fileName] = module.default;
      });
    }

    setAssets(loadedAssets);
  }, [assetType]);

  return { assets };
};

export default useAssets;
