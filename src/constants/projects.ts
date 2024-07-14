import kubikware from "../../public/img/projects/kubikware-remake.png";
import rocketStats from "../../public/img/projects/rocket-stats.png";
import sof from "../../public/img/projects/sof.png";
import zerti from "../../public/img/projects/zerti.png";
import infocus from "../../public/img/projects/infocus.png";
import calcularFechas from "../../public/img/projects/calcular-fechas.png";
import wordle from "../../public/img/projects/wordle.png";

const projects = [
	{
		title: "Kubikware",
		description: "Recreación de la página de kubikware.",
		stacks: ["HTML", "CSS", "JS"],
		link: "https://kubikware.netlify.app/",
		image: kubikware,
	},
	{
		title: "RL Stats",
		description:
			"Una aplicación móvil que da acceso a cualquier persona a sus rangos de Rocket League desde su teléfono. Esta aplicación está pensada para todos los jugadores de Rocket League, aquí podrán seguir su progreso, encontrar sus rangos, sus estadísticas y sus partidos jugados. La solución consiste en 4 páginas, un inicio de sesión, una página principal, una de estadísticas y una de partidos.",
		stacks: ["Flutter", "Dart", "RestAPI"],
		link: "https://play.google.com/store/apps/details?id=com.drogebot.rocketleaguestats",
		image: rocketStats,
	},
	{
		title: "Satellites On Fire",
		description:
			"Satellites On Fire es un sistema de detección en tiempo real de focos de calor, los cuales contemplan distintos niveles de probabilidad de ser incendios. El usuario puede observarlos en tiempo real, teniendo también la posibilidad de ver focos pasados. Adicionalmente, brindamos un sistema de alertas para que los usuarios puedan recibir notificaciones de los últimos focos detectados en sus zonas, permitiéndoles actuar a tiempo, reduciendo costos causados por la propagación de los incendios.",
		stacks: ["Front-end dev", "React", "Material-UI"],
		link: "https://www.satellitesonfire.com/",
		image: sof,
	},
	{
		title: "Zerti",
		description:
			"Zerti es un proyecto Web3 cuyo objetivo central es asegurar la validez y confianza de las certificaciones, aptitudes y títulos emitidos por las instituciones académicas, organizaciones y empresas, basándose en la inmutabilidad y transparencia de la tecnología blockchain.",
		stacks: ["React", "Web3", "NodeJs"],
		link: "https://zerti.com.ar/",
		image: zerti,
	},
	{
		title: "InFocus",
		description:
			"Una página web que brinda herramientas de ayuda a jóvenes y adultos en etapa laboral con déficit de atención. Se brindan herramientas tales como recordatorios, organizadores, una sección de estudio (donde puedas establecer un tiempo de trabajo y te dé tiempos de recreo en proporción al trabajo y que te vaya guiando para que puedas lograr un estudio efectivo), una sección de ejercicios de relajación y por último una sección de notas para cuando el usuario esté en la escuela/trabajo, pueda tomar sus apuntes y tener todo organizado.",
		stacks: ["React", "NodeJs", "Express"],
		link: "https://infocusapp.netlify.app",
		image: infocus,
	},
	{
		title: "Calcular Fechas",
		description:
			"Una aplicación móvil para ver tus eventos de una forma más divertida. Podrás crear 2 tipos de eventos, pasados o futuros. Para los eventos futuros, podrás ponerle un título y activar un recordatorio para el momento del evento o para un tiempo antes. Cuando ya lo tengas creado, podrás acceder a una pantalla donde hay una cuenta regresiva para el evento. Para los eventos pasados, vas a poder ver el tiempo que pasó desde la fecha indicada de una manera distinta. Podrás ver la cantidad exacta que pasó de cada medida de tiempo, por ejemplo, te dirá la cantidad de segundos que pasaron desde que naciste.",
		stacks: ["Android", "Kotlin", "Native App"],
		link: "/files/CalcularFechas.apk",
		download: true,
		image: calcularFechas,
	},
	{
		title: "Wordle Infinito",
		description:
			"Clásico juego de Wordle pero sacando la necesidad de esperar 24 horas para poder jugar con otra palabra.",
		stacks: ["HTML", "CSS", "JS"],
		link: "https://wordle.nicohalpe.com.ar/",
		image: wordle,
	},
];

export default projects;
