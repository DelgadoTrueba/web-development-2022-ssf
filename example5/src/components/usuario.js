import "./usuario.css"

function usuario(){
    return (
        <fieldset className="formato">
            <legend>Datos Personales</legend>
            <div>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" onchange="handlerChange(event, this)"></input>

                <label for="surname">Apellidos:</label>
                <input type="text" id="surname" name="surname" onchange="handlerChange(event, this)"></input>

                <ul>
                    <li>
                        <label for="mas">Masculino</label>
                        <input type="radio" id="mas" name="gen"></input>
                    </li>
                    <li>
                        <label for="fem">Femenino</label>
                        <input type="radio" id="fem" name="gen"></input>
                    </li>
                    <li>
                        <label for="sin">Sin determinar</label>
                        <input type="radio" id="sin" name="gen"></input>
                    </li>
                </ul>

                <label for="nacimiento">Fecha de nacimiento:</label>
                <input type="date" id="nacimiento" name="nacimiento" onchange="handlerChange(event, this)"></input>

                <label for="pai">Pais:</label>
                <input type="list" list="pais" id="pais" name="pais" onchange="handlerChange(event, this)"></input>
                <datalist id="pais">
                    <option value="España"></option>
                    <option value="Francia"></option>
                    <option value="EE.UU"></option>
                </datalist>
                
            </div>
        </fieldset>
    );
}

export default usuario;