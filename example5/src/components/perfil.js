import "./perfil.css"



function InicioSesion() {
    return (
        <fieldset className="formato">
            <legend>Datod de Inicio de Sesion</legend>
            <div>
                <label for="user">Nombre de Usuario:</label>
                <input type="text" id="user" name="user" onchange="handlerChange1(event, this)"></input><br></br>
                <label for="email">Correo electronico:</label>
                <input type="email" id="email" name="email" onchange="handlerChange1(event, this)"></input>
                <label for="email1">Confirmar Correo electronico:</label>
                <input type="email" id="email1" name="email1" onchange="handlerChange1(event, this)"></input><br></br>
                <label for="con">Contraseña:</label>
                <input type="password" id="con" name="con" onchange="handlerChange1(event, this)"></input>
                <label for="con1">Confirmar Contraseña:</label>
                <input type="password" id="con1" name="con1" onchange="handlerChange1(event, this)"></input>
            </div>
        </fieldset>
    );
}

export default InicioSesion;