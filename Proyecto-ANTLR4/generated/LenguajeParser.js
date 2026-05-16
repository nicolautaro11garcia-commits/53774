// Generated from c:/Users/nicol/53774/Proyecto-ANTLR4/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,15,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,2,1,2,1,
2,1,2,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,3,6,65,8,6,1,6,1,6,1,6,5,6,70,8,6,10,6,12,6,73,9,6,
1,7,1,7,1,8,1,8,1,8,0,1,12,9,0,2,4,6,8,10,12,14,16,0,1,1,0,10,11,77,0,19,
1,0,0,0,2,28,1,0,0,0,4,30,1,0,0,0,6,47,1,0,0,0,8,50,1,0,0,0,10,54,1,0,0,
0,12,64,1,0,0,0,14,74,1,0,0,0,16,76,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,
1,1,0,0,0,25,29,3,4,2,0,26,29,3,8,4,0,27,29,3,10,5,0,28,25,1,0,0,0,28,26,
1,0,0,0,28,27,1,0,0,0,29,3,1,0,0,0,30,31,5,3,0,0,31,32,3,14,7,0,32,33,5,
4,0,0,33,34,3,12,6,0,34,35,5,5,0,0,35,38,3,12,6,0,36,37,5,6,0,0,37,39,3,
12,6,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,7,0,0,41,42,3,6,
3,0,42,43,5,8,0,0,43,5,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,1,0,0,0,
47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,51,3,14,7,0,51,
52,5,12,0,0,52,53,3,12,6,0,53,9,1,0,0,0,54,55,5,9,0,0,55,56,3,12,6,0,56,
11,1,0,0,0,57,58,6,6,-1,0,58,59,5,1,0,0,59,60,3,12,6,0,60,61,5,2,0,0,61,
65,1,0,0,0,62,65,3,14,7,0,63,65,3,16,8,0,64,57,1,0,0,0,64,62,1,0,0,0,64,
63,1,0,0,0,65,71,1,0,0,0,66,67,10,4,0,0,67,68,7,0,0,0,68,70,3,12,6,5,69,
66,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,13,1,0,0,0,73,71,
1,0,0,0,74,75,5,13,0,0,75,15,1,0,0,0,76,77,5,14,0,0,77,17,1,0,0,0,6,21,28,
38,47,64,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'('", "')'", "'variar'", "'desde'", "'hasta'", 
                            "'con paso'", "'hacer'", "'fin_variar'", "'escribir'", 
                            null, null, "'<-'" ];
    static symbolicNames = [ null, null, null, "VARIAR", "DESDE", "HASTA", 
                             "CON_PASO", "HACER", "FIN_VAR", "ESCRIBIR", 
                             "OPADD", "OPMUL", "ASSIGN", "IDENTIFICADOR", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variar", "bloque", 
                         "asignacion", "salida", "expresion", "variable", 
                         "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8712) !== 0));
	        this.state = 23;
	        this.match(LenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.variar();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.asignacion();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_variar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(LenguajeParser.VARIAR);
	        this.state = 31;
	        this.variable();
	        this.state = 32;
	        this.match(LenguajeParser.DESDE);
	        this.state = 33;
	        this.expresion(0);
	        this.state = 34;
	        this.match(LenguajeParser.HASTA);
	        this.state = 35;
	        this.expresion(0);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 36;
	            this.match(LenguajeParser.CON_PASO);
	            this.state = 37;
	            this.expresion(0);
	        }

	        this.state = 40;
	        this.match(LenguajeParser.HACER);
	        this.state = 41;
	        this.bloque();
	        this.state = 42;
	        this.match(LenguajeParser.FIN_VAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8712) !== 0)) {
	            this.state = 44;
	            this.instruccion();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.variable();
	        this.state = 51;
	        this.match(LenguajeParser.ASSIGN);
	        this.state = 52;
	        this.expresion(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(LenguajeParser.ESCRIBIR);
	        this.state = 55;
	        this.expresion(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, LenguajeParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 58;
	            this.match(LenguajeParser.T__0);
	            this.state = 59;
	            this.expresion(0);
	            this.state = 60;
	            this.match(LenguajeParser.T__1);
	            break;
	        case 13:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.variable();
	            break;
	        case 14:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 63;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OperacionContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expresion);
	                this.state = 66;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 67;
	                _la = this._input.LA(1);
	                if(!(_la===10 || _la===11)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 68;
	                this.expresion(5); 
	            }
	            this.state = 73;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(LenguajeParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(LenguajeParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.VARIAR = 3;
LenguajeParser.DESDE = 4;
LenguajeParser.HASTA = 5;
LenguajeParser.CON_PASO = 6;
LenguajeParser.HACER = 7;
LenguajeParser.FIN_VAR = 8;
LenguajeParser.ESCRIBIR = 9;
LenguajeParser.OPADD = 10;
LenguajeParser.OPMUL = 11;
LenguajeParser.ASSIGN = 12;
LenguajeParser.IDENTIFICADOR = 13;
LenguajeParser.NUMERO = 14;
LenguajeParser.WS = 15;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instruccion = 1;
LenguajeParser.RULE_variar = 2;
LenguajeParser.RULE_bloque = 3;
LenguajeParser.RULE_asignacion = 4;
LenguajeParser.RULE_salida = 5;
LenguajeParser.RULE_expresion = 6;
LenguajeParser.RULE_variable = 7;
LenguajeParser.RULE_numero = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_variar;
    }

	VARIAR() {
	    return this.getToken(LenguajeParser.VARIAR, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	DESDE() {
	    return this.getToken(LenguajeParser.DESDE, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	HASTA() {
	    return this.getToken(LenguajeParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(LenguajeParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FIN_VAR() {
	    return this.getToken(LenguajeParser.FIN_VAR, 0);
	};

	CON_PASO() {
	    return this.getToken(LenguajeParser.CON_PASO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterVariar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitVariar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitVariar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASSIGN() {
	    return this.getToken(LenguajeParser.ASSIGN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_salida;
    }

	ESCRIBIR() {
	    return this.getToken(LenguajeParser.ESCRIBIR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.ParensContext = ParensContext;

class NumContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.NumContext = NumContext;

class IdContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.IdContext = IdContext;

class OperacionContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	OPADD() {
	    return this.getToken(LenguajeParser.OPADD, 0);
	};

	OPMUL() {
	    return this.getToken(LenguajeParser.OPMUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.OperacionContext = OperacionContext;

class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.VariarContext = VariarContext; 
LenguajeParser.BloqueContext = BloqueContext; 
LenguajeParser.AsignacionContext = AsignacionContext; 
LenguajeParser.SalidaContext = SalidaContext; 
LenguajeParser.ExpresionContext = ExpresionContext; 
LenguajeParser.VariableContext = VariableContext; 
LenguajeParser.NumeroContext = NumeroContext; 
