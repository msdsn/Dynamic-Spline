import EventEmitter from "./EventEmitter";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import Experience from "../Experience";
export default class Resources extends EventEmitter
{
    constructor()
    {
        super();
        this.experience = new Experience();
        this.sources = this.experience.sources;
        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.load();
    }
    setLoaders()
    {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.fbxLoader = new FBXLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }
    load()
    {
        for(const source of this.sources)
        {
            const type = source.type;
            switch(type)
            {
                case 'gltf':
                    this.loaders.gltfLoader.load(source.path, (file)=>{this.sourceLoaded(source, file)});
                    break;
                case 'fbx':
                    this.loaders.fbxLoader.load(source.path, (file)=>{this.sourceLoaded(source, file)});
                    break;
                case 'texture':
                    this.loaders.textureLoader.load(source.path, (file)=>{this.sourceLoaded(source, file)});
                    break;
                case 'cubeTexture':
                    this.loaders.cubeTextureLoader.load(source.path, (file)=>{this.sourceLoaded(source, file)});
                    break;
            }
        }
    }
    sourceLoaded(source, item)
    {
        this.loaded++;
        this.items[source.name] = item;
        if(this.loaded === this.toLoad)
        {
            this.trigger('ready');
        }
    }
}