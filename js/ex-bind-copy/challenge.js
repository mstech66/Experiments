(function () {
    "use strict";

    /**
     * Challenge tasks:
     *  1. Reorganize the code so it falls within the ROBOT_APP
     *  2. Change class methods so they reference the properties,
     *     and other methods, using `this`.  Bind where needed.
     *  3. Fix the robots so every copy has a unique name and serial number.
     *  4. Change the template from v1 to v2.
     *      a. Update label so it shows when the robot came online
     *      b. Make sure copying mechanism works
     */

    var ROBOT_APP = {
        robots: [],
        template_v1: {
            name: "ROBOT #",
            serial: 100000,
        },
        template_v2: {
            name: "ROBO_",
            serial: 100000,
            cameOnline: function () {
                return "2021-11-04";
            },
        },
        init: function () {
            console.log("Robot app initializing…");
            var createBtn = document.querySelector("#create");

            createBtn.addEventListener("click", this.createClick.bind(this));
        },
        randomInt: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        },
        createClick: function() {
            var robot = JSON.parse(JSON.stringify(this.template_v1));
            robot.serial += (10 * this.robots.length);
            robot.name += "" + (this.robots.length + 1);
            console.dir(this.robots);
            this.robots.push(robot);
            this.renderBots();
        },
        renderBots: function() {
            var botSlot = document.querySelector("#bot-slot");
            botSlot.innerHTML = "";
    
            var width = botSlot.clientWidth;
            var height = botSlot.clientHeight;
    
            this.robots.every.placeBot.bind(this, width, height);
        },
        placeBot: function (width, height, robot) {
            var topOffset = this.randomInt(20, height / 3);
            var leftOffset = this.randomInt(20, width / 2);
            var botSlot = document.querySelector("#bot-slot");
    
            // maybe flip the sign on the offsets
            if (Math.floor(Math.random() * 100) % 2 === 0) {
                topOffset = 0 - topOffset;
            }
            if (Math.floor(Math.random() * 100) % 2 === 0) {
                leftOffset = 0 - leftOffset;
            }
    
            var bot = document.createElement("div");
            bot.className = "robot";
            bot.style =
                "transform: translateX(" +
                leftOffset +
                "px) translateY(" +
                topOffset +
                "px);";
            var botInner = document.createElement("div");
            botInner.innerHTML = `${robot.name}<br>${robot.serial}`;
            botInner.className = "robot--inner";
            bot.appendChild(botInner);
            botSlot.appendChild(bot);
            return true;
        }
    };

    ROBOT_APP.init();
})();
