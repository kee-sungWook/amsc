
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",903,function(sym,e){var myFan=sym.getSymbol("fan_front");var firstMove=sym.getSymbol("fan_side");myFan.play("move1");firstMove.play("gogo");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var myFan=sym.getSymbol("fan_front");var firstMove=sym.getSymbol("fan_side");myFan.play("move1");firstMove.play("gogo");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fan_front'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2268,function(sym,e){sym.play("move1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.play("move3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3436,function(sym,e){sym.play("move2");});
//Edge binding end
})("fan_front");
//Edge symbol end:'fan_front'

//=========================================================

//Edge symbol: 'fan_side'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",833,function(sym,e){sym.getComposition().getStage().getSymbol("fan_front").play("move2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.getComposition().getStage().getSymbol("fan_front").play("move3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4133,function(sym,e){sym.getComposition().getStage().getSymbol("fan_front").play("move2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5833,function(sym,e){sym.getComposition().getStage().getSymbol("fan_front").play("move1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.play("gogo");});
//Edge binding end
})("fan_side");
//Edge symbol end:'fan_side'
})(jQuery,AdobeEdge,"EDGE-27168194");