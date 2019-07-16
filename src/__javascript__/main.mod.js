	(function () {
		var harvester = __init__ (__world__.harvester);
		var main = function () {
			var __iterable0__ = Object.keys (Game.creeps);
			for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
				var name = __iterable0__ [__index0__];
				var creep = Game.creeps [name];
				harvester.run_harvester (creep);
			}
			var __iterable0__ = Object.keys (Game.spawns);
			for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
				var name = __iterable0__ [__index0__];
				var spawn = Game.spawns [name];
				if (!(spawn.spawning)) {
					var num_creeps = _.sum (Game.creeps, (function __lambda__ (c) {
						return c.pos.roomName == spawn.pos.roomName;
					}));
					if (num_creeps < 0 && spawn.room.energyAvailable >= 250) {
						spawn.createCreep ([WORK, CARRY, MOVE, MOVE]);
					}
					else if (num_creeps < 15 && spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
						if (spawn.room.energyCapacityAvailable >= 350) {
							spawn.createCreep ([WORK, CARRY, CARRY, MOVE, MOVE, MOVE]);
						}
						else {
							spawn.createCreep ([WORK, CARRY, MOVE, MOVE]);
						}
					}
				}
			}
		};
		module.exports.loop = main;
		__pragma__ ('<use>' +
			'defs' +
			'harvester' +
		'</use>')
		__pragma__ ('<all>')
			__all__.main = main;
		__pragma__ ('</all>')
	}) ();
