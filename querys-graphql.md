#### create client

/_ operation _/
mutation CreateCliente($createClienteInput: CreateClienteInput!) {
createCliente(createClienteInput: $createClienteInput) {
nombre
estado
edad
cedula
}
}

/_ variables _/
{
"createClienteInput": {
"cedula": "563434",
"edad": "4656456",
"estado": true,
"nombre": "alan"
}
}

#### soft delete client

/_ operation _/
mutation RemoveCliente($removeClienteId: ID!) {
removeCliente(id: $removeClienteId) {
id  
 }
}

/_ id _/
{
"removeClienteId": "00a9da94-4f0d-4c11-90ee-53579ec46bfd"
}

#### update client

/_ operation _/

mutation UpdateCliente($updateEstudianteInput: UpdateEstudianteInput!) {
updateCliente(updateEstudianteInput: $updateEstudianteInput) {
nombre
estado
edad
cedula
}
}

/_ variables _/

{
"updateEstudianteInput": {
"id": "c2258213-7cf9-4e41-a7ed-04942a3f9146",
"cedula": "121212121212",
"nombre": "Francisco"
}
}
