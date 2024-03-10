import { Application } from '@splinetool/runtime';
import Experience from '../Experience';
import ApiConnection from '../../ApiConnection';
export default class Spline
{
    constructor(){
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.url = 'https://prod.spline.design/UbLlcZisgA5GVeUB/scene.splinecode'
        this._Init();
    }
    _Init(){
        this.apiConnection = new ApiConnection();
        this.instance = new Application(this.canvas);
        this.instance.load(this.url);
    }
    update(){
        
    }
}