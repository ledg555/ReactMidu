import "./App.css";

export default function Card() {
	return (
		<article>
			<header>
				<img
					src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
					alt="Avatar"
				/>
				<div>
					<strong>Juan Pérez</strong>
					<span>@juanchito</span>
				</div>
			</header>
			<aside>
				<button>Seguir</button>
			</aside>
		</article>
	);
}
