
const relacion= document.getElementById('relacion');
const tipoPersona = document.getElementById('tipoPersona');
const valorTipoPersona= tipoPersona.value 
switch (valorTipoPersona) {
    case '1':
        let op = document.createElement('op');
        op.setAttribute('value', '1');
        op.innerHTML = 'Dueño / Propietario';
        relacion.appendChild(op);
    break;
    case '2':
        document.getElementById('empresa').style.display = 'block';
        break;
    default:
        document.getElementById('persona').style.display = 'block';
}
