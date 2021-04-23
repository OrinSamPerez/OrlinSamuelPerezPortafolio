const navbar =  document.getElementById('navbar');
const navBarM = document.getElementById('navBar-M');
const Fecha = new Date;
var contador = 0;

document.getElementById('send').addEventListener('click', (e)=>{
    e.preventDefault();
    const Name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Note = document.getElementById('note').value;
    console.log(Name, Email, Note);
    emailjs.send("service_jo1e1zl","template_g4qzej9",{
        Name: Name,
        Day: `${Fecha.getDate()}/${Fecha.getMonth()}/${Fecha.getUTCFullYear()}`,
        Hours: `${Fecha.getHours()}:${Fecha.getSeconds()}`,
        Note: Note,
        Email: Email,
        }).then((result)=>{
            console.log(result)
        })
        .catch((error)=> console.log(error));

});

//Cerrar menu
const closeMenu = ()=>{
    navBarM.classList.remove('open')
    navBarM.classList.toggle('close')
};
const openMenu = ()=>{
    navBarM.classList.toggle('open')
}