function BlockGame(param)
{
    // 至少需要指定 canvas 进行游戏
    if (undefined === param)
    {
        throw "Invalid params!";
    }

    // Setup
    this.ctx = new Pack(param.canvas);
    this.fps = isNaN(param.fps) ? 25 : Number(param.fps);
    this.events = new EventSystem();

    // Reset all game data
    this.reset = function ()
    {
        if (undefined != this.timer)
            clearInterval(this.timer);
        this.timer = undefined;
        this.gameData = {};
        this.paused = false;
    }
    this.reset();

    // When game data needs to be updated
    this.update = function ()
    {

    }

    // Start the game
    this.run = function ()
    {
        this.reset();
        this.init();
    }

    // Draw a frame
    this.draw = function ()
    {
        // Draw by ourselves
    }

    this.tick = function (instance)
    {
        if (instance.paused)
            return;
        instance.update();
        instance.draw();
    }

    // Initialize first frame and the initial data of the game
    this.init = function ()
    {
        // If we already have a timer, reject the request.
        if (this.timer != undefined)
            return;
        this.timer = setInterval(this.tick, 1000 / this.fps, this);
        // Todo
        this.pause();
    }

    this.pause = function ()
    {
        this.paused = true;
    }

    this.unpause = function ()
    {
        this.paused = false;
    }
    // Todo plugins
}
