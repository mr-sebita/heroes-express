let heroesController ={
    
    heroes: (req, res) => {
        res.send(heroes);
    },
    detalle:(req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        const heroe = heroes.find(h => h.id == req.params.id);
        // Si se encuentra al héroe se envía el nombre y su profesión
        if (heroe) {
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
            // Si NO se encuentra se envía el mensaje de no encontrado
        } else {
            res.send("No se encontro a ese heroe");
        }
        
    },
    bio:(req, res)=>{
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find(h => h.id == req.params.id);
        
    
        if (!heroe) {
            res.send("no encontramos un heroe para mostrarte su biografia");        
        } else {
            if (req.params.ok == 'ok') {
                res.send(`${heroe.nombre}: ${heroe.resenia} `);
            }else{
                
                res.send(`"Lamento que no desees saber más de mi "`);
    
            }
            
        }
        
        // Si NO se encuentra al héroe se envía un mensaje
        // Si se encuentra al héroe:
        // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
        // Si nó vino el parámetro se envía el mensaje de error
    
    }




}