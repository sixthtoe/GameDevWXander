var WeaponSystem = {
	_weaponID: 0,
	weapons: [],
	_materialID: 0,
	materials: [],
	defineWeapon: function(weapon) {
		weapon.id = this._weaponID++;
		if (weapon.name && weapon.img && weapon.damage && weapon.range)
			this.weapons.push(weapon);
		return weapon.id;
	},
	createWeapon: function(wid, mid) {
			var weapon = JSON.parse(JSON.stringify(this.weapons[wid]));
			weapon.name = this.materials[mid].name + " " + weapon.name;
			weapon.img += "_" + this.materials[mid].img + ".png";
		if (this.materials[mid].damage)
			weapon.damage += this.materials[mid].damage;
		if (this.materials[mid].range)
			weapon.range += this.materials[mid].range;
		return weapon;
	},
	defineMaterial: function(material) {
		material.id = this._materialID++;
		if (material.name && material.img && (material.damage || material.range))
			this.materials.push(material);
		return material.id;
	},
	getAmountWeapons: function() {
		return this.weapons.length;
	},
	getAmountMaterials: function() {
		return this.materials.length;
	},
	getRandomWeapon: function() {
		return this.createWeapon(Math.floor(Math.random() * this.getAmountWeapons()), Math.floor(Math.random() * this.getAmountMaterials()));
	}
};

// Defining Weapons
var daggerID = WeaponSystem.defineWeapon({
	name: "Dagger",
	img: "res/dagger",
	damage: 1,
	range: 1
});

var swordID = WeaponSystem.defineWeapon({
	name: "Sword",
	img: "res/sword",
	damage: 3,
	range: 2
});

var LongBowID = WeaponSystem.defineWeapon({
	name: "Long Bow",
	img: "res/longbow",
	damage: 4,
	range: 4
});

var LongSwordID = WeaponSystem.defineWeapon({
	name: "Long Sword",
	img : "res/longsword",
	damage: 5,
	range: 3
});

var crossbowID = WeaponSystem.defineWeapon({
	name: "Crossbow",
	img: "res/crossbow",
	damage: 7,
	range: 10
});

var warhammerID = WeaponSystem.defineWeapon({
	name: "War Hammer",
	img: "res/warhammer",
	damage: 6,
	range: 2,
});

var sickleID = WeaponSystem.defineWeapon({
	name: "Sickle",
	img: "sickle",
	damage: 5,
	range: 1,
});
//Defining Materials
var steelID = WeaponSystem.defineMaterial({
	name: "Steel",
	img: "steel",
	damage: 3,
});

var woodID = WeaponSystem.defineMaterial({
	name: "Wood",
	img: "wood",
	damage: 1,
});

var ironID = WeaponSystem.defineMaterial({
	name: "Iron",
	img: "iron",
	damage: 2,
});

var titaniumID = WeaponSystem.defineMaterial({
	name: "Titanium",
	img: "titanium",
	damage: 9,
});

var goldID = WeaponSystem.defineMaterial({
	name: "Gold",
	img: "gold",
	damage: 4,
});

var diamondID = WeaponSystem.defineMaterial({
	name: "Diamond",
	img: "diamond",
	damage: 11,
});
