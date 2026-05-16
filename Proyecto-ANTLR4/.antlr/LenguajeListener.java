// Generated from c:/Users/nicol/53774/Proyecto-ANTLR4/Lenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LenguajeParser}.
 */
public interface LenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(LenguajeParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(LenguajeParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#variar}.
	 * @param ctx the parse tree
	 */
	void enterVariar(LenguajeParser.VariarContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#variar}.
	 * @param ctx the parse tree
	 */
	void exitVariar(LenguajeParser.VariarContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#bloque}.
	 * @param ctx the parse tree
	 */
	void enterBloque(LenguajeParser.BloqueContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#bloque}.
	 * @param ctx the parse tree
	 */
	void exitBloque(LenguajeParser.BloqueContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(LenguajeParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(LenguajeParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(LenguajeParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(LenguajeParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterParens(LenguajeParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Parens}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitParens(LenguajeParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Num}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterNum(LenguajeParser.NumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Num}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitNum(LenguajeParser.NumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Id}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterId(LenguajeParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Id}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitId(LenguajeParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Operacion}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterOperacion(LenguajeParser.OperacionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Operacion}
	 * labeled alternative in {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitOperacion(LenguajeParser.OperacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(LenguajeParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(LenguajeParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(LenguajeParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(LenguajeParser.NumeroContext ctx);
}