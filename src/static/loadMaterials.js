import * as THREE from 'three';

export async function loadMaterials(array, func, opacityValue) {
    const loadedMaterials = [];
    const loader = new THREE.TextureLoader();

    await Promise.all(array.map(async (element) => {
        const texture = await new Promise((resolve) => {
            loader.load(element.image, (texture) => {
                resolve(texture);
            });
        });
        const opacity = opacityValue;
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshStandardMaterial({ map: texture, transparent: true, side: THREE.DoubleSide, opacity: opacity });
        loadedMaterials.push(material);
    }));

    func(loadedMaterials);
}
