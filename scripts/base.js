(function() {

    // constructor
    ZUI.Base = function() {
        this._private = {};
        this._private.isUpdated = false;
    };

    // getter
    ZUI.Base.prototype.get = function() {
        var obj = this;
        var propertyName = arguments[0];
        if (propertyName === undefined || propertyName === null) {
            return undefined;
        }

        var n = 0;
        while (n < arguments.length - 1) {
            if (obj === undefined || obj === null) {
                return undefined;
            }
            obj = obj[propertyName];
            propertyName = arguments[++n];
            if (propertyName === undefined || propertyName === null) {
                return undefined;
            }
        }

        return obj[propertyName];
    };

    // setter
    ZUI.Base.prototype.set = function() {
        var obj = this;
        var propertyName = arguments[0];
        if (propertyName === undefined || propertyName === null) {
            propertyName = 0;
        }

        var n = 0;
        while (n < arguments.length - 2) {
            if (obj === undefined || obj === null) {
                obj = {};
            }
            obj = obj[propertyName];
            propertyName = arguments[++n];
            if (propertyName === undefined || propertyName === null) {
                propertyName = 0;
            }
        }
        if (obj === undefined || obj === null) {
            obj = {};
        }

        this.update(arguments.slice(0, n + 1), arguments[n + 1]);

        return obj[propertyName] = arguments[n + 1];
    };

    ZUI.Base.prototype.update = function (propertyName, value) {};

})();