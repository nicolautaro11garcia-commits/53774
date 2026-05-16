import LenguajeVisitor from './generated/LenguajeVisitor.js';

class LenguajeTranslator extends LenguajeVisitor {
    constructor() {
        super();
        this.codigo = [];
        this.declaredVars = new Set(); 
    }

    getCode() {
        return this.codigo.join('\n');
    }

    visitPrograma(ctx) {
        this.visitChildren(ctx);
        return this.getCode();
    }

    visitAsignacion(ctx) {
        const varName = ctx.variable().getText();
        const expr = this.visit(ctx.expresion());

        if (!this.declaredVars.has(varName)) {
            this.codigo.push(`let ${varName} = ${expr};`);
            this.declaredVars.add(varName);
        } else {
            this.codigo.push(`${varName} = ${expr};`);
        }
    }

    visitSalida(ctx) {
        const expr = this.visit(ctx.expresion());
        this.codigo.push(`console.log(${expr});`);
    }

    visitVariar(ctx) {
        const varName = ctx.variable().getText();
        const desde = this.visit(ctx.expresion(0));
        const hasta = this.visit(ctx.expresion(1));
        const paso = ctx.expresion(2) ? this.visit(ctx.expresion(2)) : 1;

        this.codigo.push(`for (let ${varName} = ${desde}; ${varName} <= ${hasta}; ${varName} += ${paso}) {`);

        const oldLength = this.codigo.length;
        this.visit(ctx.bloque());

        // Indentar el bloque
        for (let i = oldLength; i < this.codigo.length; i++) {
            this.codigo[i] = "    " + this.codigo[i];
        }

        this.codigo.push("}");
    }

    visitBloque(ctx) {
        return this.visitChildren(ctx);
    }

    visitOperacion(ctx) {
        const left = this.visit(ctx.expresion(0));
        const right = this.visit(ctx.expresion(1));
        const op = ctx.getChild(1).getText();
        return `(${left} ${op} ${right})`;
    }

    visitParens(ctx) {
        return `(${this.visit(ctx.expresion())})`;
    }

    visitId(ctx) {
        return ctx.getText();
    }

    visitNum(ctx) {
        return ctx.getText();
    }
}

export default LenguajeTranslator;