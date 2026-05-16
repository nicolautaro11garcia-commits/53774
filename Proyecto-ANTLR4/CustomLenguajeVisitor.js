import LenguajeVisitor from './generated/LenguajeVisitor.js';

class CustomLenguajeVisitor extends LenguajeVisitor {
    constructor() {
        super();
        this.memory = {};        
        this.output = [];        
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitVariar(ctx) {
        const varName = ctx.variable().getText();
        const desde = Number(this.visit(ctx.expresion(0)));
        const hasta = Number(this.visit(ctx.expresion(1)));
        let paso = 1;

        if (ctx.expresion(2)) {
            paso = Number(this.visit(ctx.expresion(2)));
        }

        const bloque = ctx.bloque();

        if (paso > 0) {
            for (let i = desde; i <= hasta; i += paso) {
                this.memory[varName] = i;
                this.visit(bloque);
            }
        } else {
            for (let i = desde; i >= hasta; i += paso) {
                this.memory[varName] = i;
                this.visit(bloque);
            }
        }
    }

    visitAsignacion(ctx) {
        const varName = ctx.variable().getText();
        const value = this.visit(ctx.expresion());
        this.memory[varName] = value;
    }

    visitSalida(ctx) {
        const value = this.visit(ctx.expresion());
        this.output.push(value);
        console.log(`→ ${value}`);
        return value;
    }

    visitOperacion(ctx) {
        const left = this.visit(ctx.expresion(0));
        const right = this.visit(ctx.expresion(1));
        const op = ctx.getChild(1).getText();

        switch (op) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return left / right;
            default: return 0;
        }
    }

    visitParens(ctx) {
        return this.visit(ctx.expresion());
    }

    visitId(ctx) {
        const varName = ctx.getText();
        return this.memory[varName] !== undefined ? this.memory[varName] : 0;
    }

    visitNum(ctx) {
        return Number(ctx.getText());
    }

    visitTerminal(ctx) {
        return ctx.getText();
    }
}

export default CustomLenguajeVisitor;