(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.logo_01 = function() {
	this.initialize(img.logo_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,130);


(lib.logo_02 = function() {
	this.initialize(img.logo_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,130);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.logo_01();
	this.instance.parent = this;
	this.instance.setTransform(-300,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.name, new cjs.Rectangle(-300,-65,600,130), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.logo_02();
	this.instance.parent = this;
	this.instance.setTransform(-300,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-300,-65,600,130), null);


(lib.name_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// name
	this.instance = new lib.name();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},35).wait(6));

	// 圖層 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("ABTDGQhCgCgxgnQglgdgTgsQgTgsADguQAEguAagpQAZgpAogXQAVgMAggLIA4gPIAEgCQACDIgCDCIgQABIgFAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AhLECQhDgBgygoQgkgcgUgsQgTgtAEguQAEguAZgoQAagpAogXQAWgNAfgKIA5gQIBMgVQAugNAhgGQAVgDATgCQAkgiBBgfIAbgMIgBGyIgXAKQgUAGgmAKIiTAlQgkAKgTADQgcAFgYAAIgEAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlBEYQhCgBgygoQglgcgTgsQgTgtADguQAEguAagoQAZgpAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA9geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBICDAAQAFC/ACC+Ih8AAQgwAAgYgCQghgDgagJQgQAUgRANQgrAig+AGQgvAEgpgLQgPAIgTAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_30 = new cjs.Graphics().p("Ao7EYQhCgBgygoQglgcgTgsQgTgtADguQAEguAagoQAZgpAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQA/AGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAXAHIBMAAQAugBAcAAQAMgFAPgFIAwgOIA+gSIAZgGQAKAtAGAiQAKBJABB9IAAB1IgVAGQgaAGgZACQguAVhNABIhAgBQgogBgZACIgmAEQgWACgQAAQglgBgjgQIiXAAQgwAAgYgCQghgDgagJQgOAUgSANQgrAig+AGQgvAEgpgLQgPAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AsmEwQhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgoAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC2AAQAqAAAVABQAdADAXAHIBMAAQAtgBAdAAQAMgFAPgFIAwgOIA+gSQAjgJAbgEQAogGAiACQAlgKA0gGQAogEAvgBQBDgBAoANQAZgFALgDIAggKIAfgLIAFgBIAAALIgCGJQguAIglgDQgkgCgegKIgHAAIgvAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgbAGgYACQguAVhNABIhAgBQgogBgZACIgmAEQgWACgQAAQgmgBgigQIiWAAQgwAAgYgCQghgDgagJQgQAUgRANQgrAig+AGQgvAEgpgLQgPAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AvzE2QhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgoAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAYAHIBKAAQAugBAcAAQAMgFAPgFIAwgOIA+gSQAjgJAbgEQAogHAjADQAkgKA0gGQAogEAvgBQBDgBAoANQAZgFALgDIAggKIAfgLQA1gQA0ADQAcACAZAIQAcgHAigCQAbgBArAAIBFABIAFAAIAVCTQAVCYAHBHIABALIgFAAIhIgBQgrABgdAFIgfAGQgTAEgMABQgsAEgqgQIgCgBQgwAQgWAGQhHASg2gEQgjgCgfgKIgHAAIgvAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgaAGgYACQgvAVhNABIhAgBQgogBgYACIgmAEQgWACgQAAQglgBgigQIiYAAQgwAAgYgCQghgEgagIQgPAUgSANQgrAig+AGQgvAEgogLQgQAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgXAAIgFAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AyiFJQhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgoAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAYAHIBLAAQAugBAcAAQAMgFAPgFIAvgOIA+gSQAjgJAbgEQAogGAjACQAkgKA0gGQAogEAvgBQBDgBAoANQAZgFALgDIAggKIAfgLQA1gQA0ADQAcACAZAIQAcgGAigDQAbgBArAAIBFABIAyAAIAGgCQAZgHAkgBIA9AAQBAgCAgABIABAAQAWgJAYgHQAmgJAugEQgBBZgDBCQgGBwgMCEQgtAIgXAAIgFAAIgbACIhTABIg3gBQgoALg3ABIhIgBQgrABgdAFIgfAGQgTAEgMABQgsAEgqgQIgCgBQgwAQgWAGQhHASg2gEQgjgCgfgKIgHAAIgvAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgaAGgYACQgvAVhMABIhAgBQgogBgZACIgmAEQgWACgQAAQglgBgigQIiYAAQgwAAgYgCQghgDgagJQgPAUgSANQgrAig+AGQgvAFgogMQgQAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAGgXAAIgFgBg");
	var mask_graphics_34 = new cjs.Graphics().p("A18FKQhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgoAogXQAWgNAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAXAGIBMABQAtgBAdAAQAMgGAPgEIAwgOIA+gSQAjgJAbgEQAogHAhADQAlgKA0gGQAogEAvgBQBDgBAoAMQAZgEALgDIAggKIAfgLQA1gQA0ADQAbACAZAIQAdgHAigCQAbgBArAAIBFABIAygBIAGgBQAZgHAkgBIA9AAQBAgCAgABIABAAQAWgJAYgHQAugLA6gDQAmgBBDADQA6ADAgAFQAxAIAkASIAGAEIAFAAIBKAAQALB9AaCkIAPBeIgagBQhOABgngCQgxgCgkgLIgKgCQgNgCgegKQgbgIgQgDQglgFhAAOQhIAQgeAAIgFgBIgbADIhTABIg3gBQgoALg3ABIhIgBQgrABgdAFIgfAGQgTAEgMABQgsAEgqgQIgCgBQgxAQgVAGQhHASg2gEQgkgCgegLIgHABIgvAEQgiAEhFAJIgXACIgSAFQgYAGgxAGQgYAFgtAMQgbAGgYABQguAWhNABIhAgBQgogBgZACIgmAEQgWACgQAAQgmgBgigQIiXAAQgwAAgYgCQghgEgagIQgQAUgRANQgrAig+AGQgvAEgpgMQgPAJgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_35 = new cjs.Graphics().p("A5gFvQhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgpAogXQAWgMAggKIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAYAHIBLAAQAugBAcAAQAMgFAPgFIAwgOIA+gSQAjgJAbgEQAogGAjACQAkgKA0gGQAogEAvgBQBCgBAoANQAZgFALgDIAggKIAfgLQA1gQA0ADQAcACAZAIQAcgGAigDQAbgBArAAIBFABIAyAAIAGgCQAZgHAkgBIA9AAQBAgCAgABIABAAQAWgJAYgHQAugLA6gDQAmgBBDADQA6ADAgAFQAxAIAkASIAHAEIAEAAQA8gBA+ACQAjglAwgOQAkgKBEAAIB5AAIAGgHQAegeAngPIAIgDIAwEjIAUCCIgEACQgaAIgiADQgUACgpAAIgtAAIgFAGQgdAggnAPQguAThHgCQhRgIgogBQhOABgngCQgwgBgkgMIgLgCQgNgCgegKQgbgIgQgDQglgFhAAOQhIAQgeAAIgFAAIgbACIhTABIg3gBQgoALg3ABIhIgBQgrABgdAFIgfAGQgTAEgMABQgsAEgqgQIgCgBQgwAQgWAGQhHASg2gEQgjgCgfgKIgHAAIguAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgaAGgYACQgvAVhNABIhAgBQgogBgZACIgmAEQgWACgQAAQglgBgigQIiYAAQgwAAgYgCQghgDgagJQgPAUgSANQgrAig+AGQgvAFgogMQgQAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAGgXAAIgFgBg");
	var mask_graphics_36 = new cjs.Graphics().p("A74F3QhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgpAogXQAWgNAggJIA4gQIBOgVQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAXAGIBMABQAugBAcAAQAMgGAPgEIAwgOIA+gSQAjgJAbgEQAogHAiADQAlgKA0gGQAogEAvgBQBDgBAoAMQAZgEALgDIAggKIAegLQA1gQA0ADQAcACAYAIQAdgHAigCQAbgBArAAIBFABIAygBIAGgBQAZgHAkgBIA9AAQBAgCAgABIABAAQAWgJAYgHQAugLA6gDQAmgBBDADQA6ADAgAFQAxAIAkASIAGAEIAFAAQA8gBA9ACQAkglAwgOQAkgKBEAAIB5AAIAGgHQAegeAngPQApgQA9gCQAjgBBHADIBEgBQAaAAAVADIAFAuQAXDLAKA+IASBmIABAKQgOgCgOgDQgmgKgegZIgugEQgvgDgmACQgiAogvAQQgaAIgiADQgUACgpAAIgtAAIgFAGQgdAggnAPQguAThHgCQhRgIgogBQhOABgngCQgxgCgkgLIgKgCQgNgCgegKQgbgIgQgDQglgFhAAOQhIAQgeAAIgFgBIgbADIhTABIg3gBQgoALg3ABIhIgBQgrABgdAFIgfAGQgTAEgMABQgsAEgqgQIgCgBQgxAQgVAGQhGASg2gEQgkgCgegLIgHABIgvAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgaAFgZACQguAWhNABIhAgBQgogBgZACIgmAEQgWACgQAAQglgBgjgQIiXAAQgwAAgYgCQghgEgagIQgPAUgSANQgrAig+AGQgvAEgpgMQgPAJgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_37 = new cjs.Graphics().p("A/lGLQhCgBgygoQglgcgTgsQgTgtADguQAEguAagpQAZgpAogXQAWgNAggKIA4gQIBOgUQAtgNAhgGQAVgDATgCQAlgiBAgfQA+geAxgNQA/gSA5AGQBAAGAtAiIABAAIAogBIC3AAQAqAAAVABQAdADAXAHIBMAAQAugBAcAAQAMgFAPgFIAwgOIA+gSQAjgJAbgEQAogGAiACQAlgKA0gGQAogEAvgBQBDgBAoANQAZgFALgDIAggKIAfgLQA1gQA0ADQAcACAYAIQAdgGAigDQAagBArAAIBFABIAyAAIAGgCQAZgHAkgBIA9AAQBAgCAgABIABAAQAWgJAYgHQAugLA6gDQAmgBBDADQA6ADAgAFQAxAIAkASIAGAEIAFAAQA8gBA9ACQAkglAwgOQAkgKBEAAIB5AAIAGgHQAegeAngPQApgQA9gCQAjgBBHADIBEgBQAoABAcAGQAnAJAgAXIAGgBQBCgNA7gDIAYgBQAVgMAdgKIA8gRQA0gQAVgEQAogHAoAHQASB5ADCQQABAhgCB4IgFgCQgXgLgSgQIgMACIgoAKQgaAIgOADQgQAEgQAAQgZALgiAHIhEAMQhEANgjAEQg6AHgrgLQgmgKgegZIgugEQgvgDgmACQgiAogvAQQgaAIgiADQgUACgpAAIgtAAIgFAGQgdAggnAPQguAThHgCQhRgIgogBQhOABgngCQgxgBgkgMIgKgCQgNgCgegKQgbgIgQgDQglgFhAAOQhIAQgeAAIgFAAIgbACIhTABIg3gBQgoALg3ABIhIgBQgrABgdAFIgfAGQgSAEgMABQgsAEgqgQIgCgBQgwAQgWAGQhHASg2gEQgkgCgegKIgHAAIgvAEQgiAEhFAJIgXACIgSAFQgYAGgyAGQgYAFgtAMQgaAGgZACQguAVhNABIhAgBQgogBgZACIgmAEQgWACgQAAQglgBgjgQIiXAAQgwAAgYgCQghgDgagJQgPAUgSANQgrAig+AGQgvAEgpgLQgPAIgUAHQgUAGglAKIiTAlQglAKgTADQgdAFgYAAIgEAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgiUAGZQhDgCgygnQgkgdgUgsQgTgsAEgvQAEguAZgpQAagpAogXQAWgMAfgLIA5gPIBNgVQAugMAhgGQAUgEAUgCQAkghBBgfQA+geAxgOQA+gRA5AFQBBAGAtAiIAAABIApgBIC3gBQAqAAAVACQAcACAYAHIBMABQAtgCAcAAQAMgFAPgFIAxgOIA9gRQAjgKAbgEQAogGAjACQAkgKA0gGQApgEAvgBQBCgBAoANQAZgFALgDIAggKIAggLQA1gQAzAEQAcACAZAHQAdgGAigCQAagCArABIBGABIAwgBIAHgCQAZgGAjgBIA9gBQBBgCAfACIABAAQAWgKAZgGQAtgMA6gCQAngCBDADQA6ADAfAFQAxAIAkATIAHADIAEAAQA8gBA+ADQAjgmAxgNQAjgKBFAAIB4gBIAHgGQAegfAmgOQAqgRA9gBQAjgBBGACIBFAAQAnAAAcAHQAnAJAhAXIAFgBQBCgOA7gDIAZgBQAUgMAegJIA8gRQA0gQAVgEQAogIApAHQAqAIAiAVQARAKAPAOIAMgCQBJgPA3gWIA2gYQAfgNAYgEIAOgDIgCGYQgkANgaAJQhFAYg6AJQhkAPhCggQgXgLgTgRIgMADIgoALQgaAIgOADQgQADgQABQgYALgjAHIhEAMQhEANgiAEQg7AHgqgMQgmgKgfgZIgugDQgugDgmACQgiAngwAQQgZAJgiADQgVABgpAAIgtAAIgFAGQgdAggmAQQgvAThGgDQhRgHgogCQhPABgmgBQgxgCgkgMIgKgBQgNgDgegJQgcgJgQgCQgkgGhBAPQhHAQgegBIgGAAIgbADIhTAAIg3AAQgoAKg3ABIhHAAQgqAAgeAFIgfAGQgTAEgMABQgrAFgqgQIgDgBQgwAQgVAFQhIATg1gEQgkgCgfgLIgGABIgvAEQgiADhGAKIgWABIgSAGQgZAGgyAGQgXAEguAMQgaAGgYACQgvAVhMABIhBgBQgngBgZACIgmAFQgXACgQgBQglgBgigQIiYAAQgwAAgYgCQghgDgZgJQgQAUgRAOQgrAig/AFQgvAFgogMQgQAIgTAHQgUAHgmAJIiTAmQgkAJgUAEQgcAFgYAAIgEAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EglWAGkQhCgCgygnQglgdgTgsQgTgsADgvQAEguAagpQAZgpAogXQAWgMAggLIA4gPIBOgWQAtgLAhgGQAVgEATgCQAlghBAgfQA+geAxgOQA/gRA5AFQBAAGAtAiIABABIAogBIC3gBQAqAAAVACQAdACAYAHIBLABQAugCAcAAQAMgFAPgFIAwgOIA+gRQAjgKAbgEQAogGAjACQAkgKA0gGQAogEAvgBQBDgBAoANQAZgFALgDIAggKIAfgLQA1gQA0AEQAcACAZAHQAcgGAigCQAbgCArABIBFABIAygBIAGgCQAZgGAkgBIA9gBQA/gCAgACIABAAQAWgKAYgGQAugMA6gCQAmgCBDADQA6ADAgAFQAxAIAkATIAHADIAEAAQA8gBA+ADQAjgmAwgNQAkgKBEAAIB5gBIAGgGQAegfAngOQApgRA9gBQAjgBBHACIBEAAQAoAAAcAHQAnAJAhAXIAFgBQBCgOA7gDIAZgBQAUgMAdgJIA8gRQA0gQAVgEQApgIApAHQApAIAiAVQASAKAOAOIAMgCQBJgPA4gWIA2gYQAfgNAYgEIAOgDQAagLAdgFQAZgFAhgBIA7ABIB2ABQAzACApAIIAEgBIAAGPIgIAAQgTgCgggJIg0gMQgzgJg/AJIg+AJIgdADIgMAFQhLAggwAQQhEAYg7AJQhkAPhCggQgWgLgTgRIgMADIgoALQgaAIgOADQgQADgQABQgZALgiAHIhEAMQhEANgjAEQg6AHgrgMQgmgKgegZIgugDQgugDgnACQgiAogvAPQgaAJgiADQgUABgpAAIgtAAIgFAGQgdAggnAQQguAThHgDQhRgHgogCQhOABgngBQgxgCgjgMIgLgBQgNgDgegJQgbgJgQgCQglgGhAAPQhIAQgegBIgFAAIgbADIhSAAIg3AAQgoALg3AAIhIAAQgrAAgdAFIgfAGQgTAEgMABQgsAFgqgQIgCgBQgwAQgWAFQhHATg2gEQgjgCgfgLIgHABIgvAEQgiADhFAKIgXABIgSAGQgYAGgyAGQgYAEgtAMQgaAGgYACQgvAVhNABIhAgBQgogBgZACIgmAFQgWACgQgBQglgBgigQIiYAAQgwAAgYgCQghgDgagJQgPAVgSANQgrAig+AFQgvAFgogMQgQAIgUAHQgUAHglAJIiTAmQglAJgTAEQgdAFgXAAIgFAAg");
	var mask_graphics_40 = new cjs.Graphics().p("Egn7AGkQhDgCgygnQgkgdgUgsQgTgsAEgvQAEguAZgpQAagpAogXQAWgMAfgLIA5gPIBNgWQAugLAhgGQAUgEAUgBQAkgiBBgfQA+geAxgOQA+gRA5AFQBBAGAtAiIAAABIApgBIC3gBQAqAAAVACQAdACAXAHIBMABQAtgCAcABQANgGAOgFIAxgOIA9gRQAjgKAbgEQApgGAiADQAkgLA0gGQApgEAvgBQBCAAAoAMQAagEAKgEIAggKIAggLQA1gQAzAEQAcACAZAIQAdgHAigCQAagCArABIBGABIAygBIAGgCQAZgGAjgBIA9gBQBBgCAfACIACAAQAVgJAZgHQAtgMA5gCQAngCBDADQA6ADAfAFQAxAIAkATIAHADIAEAAQA9AAA9ACQAkglAwgOQAjgKBFAAIB4gBIAHgGQAegfAmgOQAqgRA9gBQAjgBBGACIBFAAQAnAAAcAHQAnAJAhAXIAFgBQBCgOA7gDIAZgBQAUgMAegJIA8gRQA0gQAVgEQAogIApAHQAqAIAiAVQARALAPANIAMgCQBJgPA3gWIA2gYQAfgNAYgEIAOgCQAbgMAdgFQAZgFAhgBIA6ABIB3ABQAzACAoAIQAWgGAcgDQAXgDAzAAIDUAAIgBF/QgegBgyAAIiDAAIgCAAQgOAIgQAGQgvATgwgFQgUgCgggJIg0gMQgzgJg/AJIg+AJIgdADIgMAFQhKAggwAQQhFAYg6AJQhkAPhCggQgXgLgSgQIgNACIgoALQgaAIgOADQgQADgQABQgYALgjAHIhEAMQhEANgiAEQg7AHgqgMQgmgJgfgaIgugDQgugDgmACQgiAogwAPQgZAJgiADQgVABgpAAIgsAAIgGAGQgdAggmAQQgvAThGgDQhRgHgogCQhPABgmgBQgxgCgkgMIgKgBQgNgDgegJQgcgJgQgCQgkgGhBAPQhGAQgegBIgFAAIgcADIhTAAIg3AAQgoALg3AAIhIAAQgqAAgeAFIgfAGQgTAEgMABQgrAFgqgQIgCgBQgxAQgVAFQhIATg1gEQgkgCgfgLIgGABIgvAEQgiADhGAKIgWABIgSAGQgZAGgyAGQgXAEguAMQgaAGgYACQgvAWhMAAIhBgBQgngBgZACIgmAFQgXACgQgBQglAAgigRIiYAAQgwAAgYgCQgggDgagJQgQAVgRANQgrAig/AFQguAFgpgMQgQAJgTAGQgUAHgmAJIiTAmQgkAJgUAEQgcAFgYAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:-283.6,y:52.9}).wait(1).to({graphics:mask_graphics_28,x:-267.7,y:46.9}).wait(1).to({graphics:mask_graphics_29,x:-243.1,y:44.7}).wait(1).to({graphics:mask_graphics_30,x:-218.1,y:44.7}).wait(1).to({graphics:mask_graphics_31,x:-194.6,y:42.3}).wait(1).to({graphics:mask_graphics_32,x:-174.1,y:41.7}).wait(1).to({graphics:mask_graphics_33,x:-156.6,y:39.8}).wait(1).to({graphics:mask_graphics_34,x:-134.8,y:39.7}).wait(1).to({graphics:mask_graphics_35,x:-112,y:36}).wait(1).to({graphics:mask_graphics_36,x:-96.8,y:35.2}).wait(1).to({graphics:mask_graphics_37,x:-73.1,y:33.2}).wait(1).to({graphics:mask_graphics_38,x:-55.6,y:31.8}).wait(1).to({graphics:mask_graphics_39,x:-36.2,y:30.7}).wait(1).to({graphics:mask_graphics_40,x:-19.7,y:30.7}).wait(1));

	// line
	this.instance_1 = new lib.line();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-65,600,130);


// stage content:
(lib.logo_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.name_run();
	this.instance.parent = this;
	this.instance.setTransform(300,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,65,600,130);
// library properties:
lib.properties = {
	width: 600,
	height: 130,
	fps: 36,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/logo_01.png", id:"logo_01"},
		{src:"images/logo_02.png", id:"logo_02"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;