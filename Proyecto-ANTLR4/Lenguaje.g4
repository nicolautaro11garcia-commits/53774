grammar Lenguaje;

//  REGLAS DEL PARSER 

programa
    : instruccion+ EOF
    ;

instruccion
    : variar
    | asignacion
    | salida
    ;

variar
    : 'variar' variable 'desde' expresion 'hasta' expresion
      ('con paso' expresion)?
      'hacer' bloque 'fin_variar'
    ;

bloque
    : instruccion*
    ;

asignacion
    : variable '<-' expresion
    ;

salida
    : 'escribir' expresion
    ;

expresion
    : expresion (OPADD | OPMUL) expresion  # Operacion
    | '(' expresion ')'                    # Parens
    | variable                             # Id
    | numero                               # Num
    ;

variable
    : IDENTIFICADOR
    ;

numero
    : NUMERO
    ;

// REGLAS DE LOS TOKENS

VARIAR    : 'variar' ;
DESDE     : 'desde' ;
HASTA     : 'hasta' ;
CON_PASO  : 'con paso' ;
HACER     : 'hacer' ;
FIN_VAR   : 'fin_variar' ;
ESCRIBIR  : 'escribir' ;

OPADD : '+' | '-' ;
OPMUL : '*' | '/' ;
ASSIGN : '<-' ;
IDENTIFICADOR
    : [a-zA-Z] [a-zA-Z0-9_]* 
    ;
NUMERO
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
