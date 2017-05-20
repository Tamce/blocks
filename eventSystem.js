function EventSystem ()
{
    this.events = [];
    this.id = 0;
    this.trigger = function (e, params)
    {
        var result = true;
        for (var i = 0; i < this.events.length; ++i)
        {
            event = this.events[i];
            if (e == event.on)
            {
                temp = event.callback(params);
                if (undefined != temp)
                {
                    result = result && temp;
                }
            }
        }
        return result;
    }

    this.on = function (event, callback)
    {
        this.events.push({
            on: event,
            callback: callback,
            id: this.id + 1
        });
        this.id++;
        return this.id - 1;
    }

    this.remove = function (id)
    {
        var pos = -1;
        for (var i = 0; i < this.events.length; ++i)
        {
            if (this.events[i].id == id)
            {
                pos = i;
            }
        }
        if (pos != -1)
            this.events.slice(pos, 1);
    }
}
