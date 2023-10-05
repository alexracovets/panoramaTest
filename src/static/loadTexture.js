import * as THREE from 'three';

export async function loadMaterial(link, func, loader) {
	try {
		const texture = await new Promise((resolve) => {
			new THREE.TextureLoader().load(link, (loadedTexture) => {
				resolve(loadedTexture);
			});
		});
		texture.colorSpace = THREE.SRGBColorSpace;
		const material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.BackSide });
		func(material);
		setTimeout(() => loader(false), 500)
	} catch (error) {
		console.error(`Error loading texture: ${link}`, error);
	}
}
