const fs = require("fs").promises;
const lexer = require("./lexer");
async function main(){
    const code = (await fs.readFile("example1.smplr")).toString();
    lexer.reset(code);
    let token;

    while(true){
        token = lexer.next();
        if(token){
            console.log(token.type, JSON.stringify(token.value));
        }
        else{
            break;
        }
    }
    console.log(code);
}

main().catch(err=>console.log(err.stack));