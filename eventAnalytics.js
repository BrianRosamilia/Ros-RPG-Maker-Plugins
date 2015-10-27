//=============================================================================
// eventAnalytics.js
//=============================================================================

/*:
 * @plugindesc Send Event information to google analytics.
 * @author Brian Rosamilia
 * @help github.com/BrianRosamilia
 * @param key
 */

(function(){ 
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    var parameters = PluginManager.parameters('eventAnalytics');
    var key = parameters['key'];
    
    if(!key) throw new Error("A 'key' parameter (set to a google analytics API key) is required for the event analytics plugin.")
    
    ga('create', key, 'none')
    ga('send', 'pageview');

    var Game_Event_start = Game_Event.prototype.start;

    Game_Event.prototype.start = function() {
        Game_Event_start.call(this);
        ga('send', 'event', 'Event Triggered', this.event().name, this.event().note);
    };
})();
