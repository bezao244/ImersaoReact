//criando um estilo global para a página
function GlobalStyle(){
    return(
        <style global jsx>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body{
                font-family: sans-serif;
            }
        `}</style>
    );
}
//criando um componente de titulo para normalizar, recebendo o texto como argumento
function Title(arg){
    //pegando o atrubuto tag do elemento
    const Tag = arg.tag;
    return(
        //normalizando uma criacao de tag com o mesmo estilo, a <Tag> recebe dentro o argumento passado anteriormente
        <>
            <Tag>{arg.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: red;
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
        
    );
}
//componente
function HomePage(){
    return (
    <div>
        <GlobalStyle/>
        <Title tag="h2">Boas vindas de volta!</Title>
        <h2>Discord - Alura Matrix</h2>
    </div>
    );
}

export default HomePage;