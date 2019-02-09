function mostrar() {
	var planeta;
	planeta = prompt("ingrese un planeta del sistema solar ");
	switch (planeta) {

		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break

		case "tierra":
			alert("acá vivimos");
			break

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			// pluton ya no es un planeta
			alert("acá hace más frio");
			break

		default:
			alert("El planeta que eligio no es un planeta valido");

	}

}
/* Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */