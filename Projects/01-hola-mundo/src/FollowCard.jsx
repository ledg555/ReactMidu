/* eslint-disable react/prop-types */
//import "./FollowCard.css";

export default function FollowCard({name, usrname, isFollowing }) {
	return (
		<article className="followCard">
			<header className="followCard-header">
				<img
					className="followCard-avatar"
					src={`https://unavatar.io/youtube/${usrname}`}
					alt="Avatar"
				/>
				<div className="followCard-info">
					<strong>{name}</strong>
					<span className="followCard-usrname">@{usrname}</span>
				</div>
			</header>
			<aside>
				<button className="followCard-followButton">{isFollowing ? "Siguiendo" : "Seguir"}</button>
			</aside>
		</article>
	);
}
