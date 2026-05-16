import fs from 'fs';
import antlr4 from 'antlr4';
import LenguajeLexer from './generated/LenguajeLexer.js';
import LenguajeParser from './generated/LenguajeParser.js';
import CustomLenguajeVisitor from './CustomLenguajeVisitor.js';
import LenguajeTranslator from './LenguajeTranslator.js';

// Funcion para escribir el arbol de análisis sintáctico de forma mas legible 
function formatParseTree(node, ruleNames, indent = 0) {
    let str = "";
    const spaces = "  ".repeat(indent);

    if (!node.children || node.children.length === 0) {
        const text = node.getText();
        if (text !== "<EOF>") {
            str += `${spaces}• ${text}\n`;
        }
    } else {
        const ruleName = ruleNames[node.ruleIndex] || `RULE_${node.ruleIndex}`;
        str += `${spaces}└─ ${ruleName.toUpperCase()}\n`;
        for (let child of node.children) {
            str += formatParseTree(child, ruleNames, indent + 1);
        }
    }
    return str;
}

function main() {
    try {
        const input = fs.readFileSync('input.txt', 'utf8');
        
        console.log("=== CÓDIGO FUENTE ===\n");
        console.log(input.trim());
        console.log("\n" + "=".repeat(60) + "\n");

        const chars = new antlr4.InputStream(input);
        const lexer = new LenguajeLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new LenguajeParser(tokens);

        parser.buildParseTrees = true;
        const tree = parser.programa();

        // 1. ANÁLISIS LÉXICO Y SINTÁCTICO
        console.log("=== 1. ANÁLISIS LÉXICO Y SINTÁCTICO ===");
        if (parser._syntaxErrors === 0) {
            console.log("✅ El código es léxica y sintácticamente CORRECTO\n");
        } else {
            console.log(`❌ Se encontraron ${parser._syntaxErrors} error(es) sintáctico(s)\n`);
        }

        // 2. TABLA DE TOKENS Y LEXEMAS 
        console.log("\nTabla de Tokens y Lexemas:");
        console.log("--------------------------------------------------");
        console.log("| Lexema" + " ".repeat(13) + "| Token" + " ".repeat(25) + "|");
        console.log("--------------------------------------------------");

        tokens.tokens.forEach(token => {
            if (token.channel === 0 && token.type !== antlr4.Token.EOF) {
                const lexema = (token.text || "").padEnd(18);
                
                let tokenType = String(token.type); // valor por defecto

                // Intentar obtener el nombre real del token
                if (parser.vocabulary && typeof parser.vocabulary.getSymbolicName === 'function') {
                    const name = parser.vocabulary.getSymbolicName(token.type);
                    if (name) tokenType = name;
                } else if (LenguajeParser && LenguajeParser.symbolicNames) {
                    const name = LenguajeParser.symbolicNames[token.type];
                    if (name) tokenType = name;
                }

                console.log(`| ${lexema} | ${tokenType.padEnd(30)} |`);
            }
        });
        console.log("--------------------------------------------------");
        console.log("");

        // 3. ÁRBOL DE ANÁLISIS SINTÁCTICO
        console.log("=== 3. ÁRBOL DE ANÁLISIS SINTÁCTICO ===");
        console.log(formatParseTree(tree, parser.ruleNames));

        // 4. EJECUCIÓN
        console.log("\n=== SALIDAS DEL PROGRAMA ===");
        const visitor = new CustomLenguajeVisitor();
        visitor.visit(tree);

        // TRADUCCIÓN A JAVASCRIPT 
        console.log("\n=== TRADUCCIÓN A JAVASCRIPT ===");
        const translator = new LenguajeTranslator();
        const jsCode = translator.visit(tree);
        
        console.log(jsCode);
        console.log("\n" + "=".repeat(60));

        console.log("=== EJECUCIÓN DEL CÓDIGO GENERADO ===");
        try {
            eval(jsCode);   
        } catch (e) {
            console.error("Error al ejecutar el código generado:", e.message);
        }

    } catch (err) {
        console.error("Error al ejecutar el analizador:", err.message);
    }
    
}

main();