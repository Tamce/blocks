function Pack (canvas)
{
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this._x = function (coord)
    {
        return coord / 100 * this.screenWidth;
    }
    this._y = function (coord)
    {
        return coord / 100 * this.screenHeight;
    }
    _x = this._x;
    _x = _x.bind(this);
    _y = this._y;
    _y = _y.bind(this);

    this.resize = function ()
    {
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
    }
    this.fillStyle = function (style)
    {
        return this.ctx.fillStyle = style;
    }
    this.fillRect = function (x, y, w, h, style)
    {
        if (undefined != style)
            this.fillStyle(style);
        this.ctx.fillRect(_x(x), _y(y), _x(w), _y(h));
    }
    this.resize();
    window.addEventListener("resize", () => this.resize());
}
