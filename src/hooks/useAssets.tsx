import { useState, useEffect } from 'react';

type AssetType = 'skills' | 'projects';

interface GlobModuleType {
    default: string;
}

interface UseAssetsType {
    assets: Record<string, string>;
}

const useAssets = (assetType: AssetType): UseAssetsType => {
    const [assets, setAssets] = useState<Record<string, string>>({});

    useEffect(() => {
        const loadAssets = async () => {
            let assetModules: Record<string, GlobModuleType> = {};
            
            if (assetType === 'skills') {
                assetModules = import.meta.glob('/src/assets/skills/*.png', { eager: true }) as Record<string, GlobModuleType>;
            } else if (assetType === 'projects') {
                assetModules = import.meta.glob('/src/assets/projects/**/*.png', { eager: true }) as Record<string, GlobModuleType>;
            }

            const loadedAssets: Record<string, string> = {};

            Object.entries(assetModules).forEach(([path, module]) => {
                console.log('Processing path:', path);
                
                if (assetType === 'skills') {
                    const fileName = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|gif|svg)$/, '') || '';
                    loadedAssets[fileName] = module.default;
                } else if (assetType === 'projects') {
                    const pathParts = path.split('/');
                    const folderName = pathParts[pathParts.length - 2]; 
                    const fileName = pathParts[pathParts.length - 1].replace(/\.(png|jpg|jpeg|gif|svg)$/, '');
                    const key = `${folderName}_${fileName}`;
                    loadedAssets[key] = module.default;
                }
            });  
            setAssets(loadedAssets);
        };
        loadAssets();
    }, [assetType]);

    return { assets };
};

export default useAssets;