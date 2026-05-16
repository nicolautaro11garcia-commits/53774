Proyecto: Analizador Sintáctico (ANTLR4) - UTN FRM

Este proyecto consiste en el desarrollo de un Analizador Sintáctico utilizando la
herramienta ANTLR4 (Another Tool for Language Recognition) bajo el entorno de
ejecución de Node.js. El objetivo es procesar y validar gramáticas específicas

🕵️‍♀️Requisitos previos para su uso
Para ejecutar este proyecto en una maquina local, es necesario contar con:
-Node.js (Versión LTS recomendada)
-Java JRE/JDK (Requerido por ANTLR4 para la generación de código)
Gestor de paquetes npm (incluido con Node.js)

⚙️ Funcionalidad del Analizador
El propósito principal de este software es realizar el análisis léxico y sintáctico de un lenguaje fuente definido en la gramática del proyecto. Sus funciones principales incluyen:
-Tokenizacion
-Validacion Sintactica 
-Deteccion de Errores (identifica errores de sintaxis y reporta la linea exacta del error para facilitar la correcion del codigo)
-Generacion de Arbol de Analisis (Parse Tree)
Esta configurado para leer multiples entradas (ya sean correctas o incorrectas) y mostrar el veredicto del analisis por consola de forma clara

🚀 Instalación y Uso
Para probar este proyecto en cualquier máquina, sigue estos pasos:
1. **Clonar el repositorio**:
  git clone https://github.com/nicolautaro11garcia-commits/53774.git

2. **Seleccionar la carpeta del Proyecto desde una terminal y abre VSCODE**:
Selecciona la caperta del proyecto utilizando la dirreccion en la cual se guardo con el siguiente comando "cd ruta-de-acceso-al-Proyecto-ANTLR4"
Luego con el comando "code ." abre el proyecto con VSCode

3. **Ejecutar el Analizador**
Agrega una entrada en el archivo "input.txt" puede ser una entrada de la seccion de ejemplos o una que quieras probar, dale guardar o "Crtl + S"
Luego en terminal escribe "npm start" dentro del archivo "Lenguaje.g4" para poder ejecutar la prueba del "input.txt", siquieres ver el arbol sintactico presina "F5" dentro del archivo "Lenguaje.g4"
En caso de tener problema con la carpeta "node_modules" puedes eliminarla y volverla a crear haciendo en la terminal del mismo VSCode "npm install" o en una terminal del sistermas accediendo a la carpeta del proyecto como se explico anteriormente y luego haciendo "npm install"

📝El repositorio cuenta con lo siguientes archivos:
-Proyecto-ANTLR4: Carpeta principal que contiene el codigo del analizador
-Gramatica.txt: Contiene la gramatica utilizada para este proyecto
-inputs: Contiene 4 inputs de prueba que pueden ser utlizados en este analizador 2 correctos que respetan la gramatica y 2 incorrectos que no lo hacen
.Readme.md: Documento de texto con la explicacion e informacion general para la utilizacion del proyecto 

# Autor:
**Nicolas Lautaro Garcia Diaz**
**Legajo: 53774**
**UTN FRM**
