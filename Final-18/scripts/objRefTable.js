const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.Sin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{land: 0},
	{tree1: 0},
	{grass: 0},
	{rock: 0},
	{cat: 0},
	{landrock: 0},
	{fishs: 0},
	{tree2: 0},
	{chair: 0},
	{TiledBackground: 0},
	{coin: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{ScrollTo: 0},
	{player: 0},
	{Sine: 0},
	{bee: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{crab: 0}
];

self.InstanceType = {
	land: class extends self.ISpriteInstance {},
	tree1: class extends self.ISpriteInstance {},
	grass: class extends self.ISpriteInstance {},
	rock: class extends self.ISpriteInstance {},
	cat: class extends self.ISpriteInstance {},
	landrock: class extends self.ISpriteInstance {},
	fishs: class extends self.ISpriteInstance {},
	tree2: class extends self.ISpriteInstance {},
	chair: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	coin: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	bee: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	crab: class extends self.ISpriteInstance {}
}