import { useState, useEffect } from 'react';

const useAssets = (assetType) => {
    const [assets, setAssets] = useState({});

    useEffect(() => {
        const loadAssets = async () => {

            let assetModules = {};
            
            if (assetType === 'skills') {
                assetModules = import.meta.glob('/src/assets/skills/*.png', { eager: true });
            } else if (assetType === 'projects') {
                assetModules = import.meta.glob('/src/assets/projects/**/*.png', { eager: true });
            }

            const loadedAssets = {};

            Object.entries(assetModules).forEach(([path, module]) => {
                console.log('Processing path:', path);
                
                if (assetType === 'skills') {
                    const fileName = path.split('/').pop().replace(/\.(png|jpg|jpeg|gif|svg)$/, '');
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