//=============================================================================
// battlerTPGain.js
//=============================================================================

/*:
 * @plugindesc Start battles with a set amount of TP.
 * @author Brian Rosamilia
 * @help github.com/BrianRosamilia
 * @param tp
 */

(function(){
	var parameters = PluginManager.parameters('battlerTPGain');
    var tp = Number(parameters['tp'] || 5);

	Game_Battler.prototype.initTp = function() {
		this.setTp(tp);
	};
})();


