import Debug from './Utils/Debug';
import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import Spline from './Spline/Spline';


let instance = null;
export default class Experience
{
    constructor(canvas)
    {
        if(instance)
        {
            return instance;
        }
        instance = this;

        // global access
        window.experience = this;

        // Canvas
        this.canvas = canvas;
        

        // set up
        this.debug = new Debug();
        this.sizes = new Sizes();
        this.time = new Time();

        this.spline = new Spline();

        // Tick Event
        this.time.on('tick', () =>
        {
            this.update();
        });
        
        // Resize Event
        this.sizes.on('resize', () =>
        {
            this.resize();
        });

    }
    update()
    {
        this.spline.update();
    }
    resize()
    {
        
    }
}