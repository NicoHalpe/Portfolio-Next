import React from "react";

type Props = {
	light?: boolean;
};

export default function Avatar({ light }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className="avatar"
			viewBox="0 0 200 200"
			aria-label="avatar nico halperin"
		>
			<path
				style={{ WebkitTransition: "fill .5s", transition: "fill .5s" }}
				fill="#65c9ff"
				d="M148.75 29.176c10.662 3.939 15.544 19.402 21.739 33 6.195 13.62 13.726 25.375 14.93 37.82 1.204 12.426-3.919 25.522-12.303 35.537-8.363 10.016-19.987 16.93-31.83 20.723-11.866 3.792-23.928 4.442-37.37 6.684-13.419 2.22-28.196 6.055-40.302 2.41-12.106-3.647-21.519-14.773-29.925-27.03-8.429-12.237-15.806-25.626-13.989-37.988 1.839-12.362 12.894-23.698 20.753-36.898C48.29 50.254 52.91 35.23 63.198 31.082c10.268-4.148 26.16 2.578 42.339 2.159 16.156-.42 32.574-8.004 43.214-4.065"
				transform="translate(0 -5)"
			></path>
			<defs>
				<path
					id="react-path-3"
					d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73z"
				></path>
				<path
					id="react-path-2"
					fill="#fff"
					d="M148.75 29.176c10.662 3.939 15.544 19.402 21.739 33 6.195 13.62 13.726 25.375 14.93 37.82 1.204 12.426-3.919 25.522-12.303 35.537-8.363 10.016-19.987 16.93-31.83 20.723-11.866 3.792-23.928 4.442-37.37 6.684-13.419 2.22-28.196 6.055-40.302 2.41-12.106-3.647-21.519-14.773-29.925-27.03-8.429-12.237-15.806-25.626-13.989-37.988 1.839-12.362 12.894-23.698 20.753-36.898C48.29 50.254 52.91 35.23 63.198 31.082c10.268-4.148 26.16 2.578 42.339 2.159 16.156-.42 32.574-8.004 43.214-4.065"
					transform="translate(0 20)"
				></path>
				<mask id="maskmask">
					<rect width="100%" height="40%" fill="#fff"></rect>
					<use xlinkHref="#react-path-2" transform="translate(-20 -25)"></use>
				</mask>
			</defs>
			<g fill="none" fillRule="evenodd" transform="translate(20 25)" mask="url(#maskmask)">
				<g transform="scale(.6)">
					<g transform="translate(32 36)">
						<mask id="react-mask-6" fill="#fff">
							<use xlinkHref="#react-path-3"></use>
						</mask>
						<use fill="#D0C6AC" xlinkHref="#react-path-3"></use>
						<g fill="#EDB98A" mask="url(#react-mask-6)">
							<path d="M0 0H264V280H0z"></path>
						</g>
						<path
							fill="#000"
							fillOpacity="0.1"
							d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79z"
							mask="url(#react-mask-6)"
						></path>
					</g>
					<g transform="translate(0 170)">
						<defs>
							<path
								id="react-path-149"
								d="M133.96.295c36.976 3.03 66.04 34 66.04 71.757V81H0v-8.948C0 33.952 29.592 2.765 67.045.22 67.015.593 67 .97 67 1.348c0 11.863 14.998 21.48 33.5 21.48 18.502 0 33.5-9.617 33.5-21.48 0-.353-.013-.704-.04-1.053z"
							></path>
						</defs>
						<g transform="translate(32 29)">
							<mask id="react-mask-150" fill="#fff">
								<use xlinkHref="#react-path-149"></use>
							</mask>
							<use fill="#E6E6E6" xlinkHref="#react-path-149"></use>
							<g fill="#262E33" mask="url(#react-mask-150)">
								<path d="M0 0H264V110H0z" transform="translate(-32 -29)"></path>
							</g>
							<g fill="#000" fillOpacity="0.16" mask="url(#react-mask-150)" opacity="0.6">
								<ellipse
									cx="40.5"
									cy="27.848"
									rx="39.635"
									ry="26.914"
									transform="translate(60 -25)"
								></ellipse>
							</g>
						</g>
						<path
							fill="#3A4C5A"
							d="M68.785 1.122C30.512 2.804 0 34.365 0 73.052V82h69.362C65.96 69.92 64 55.709 64 40.5c0-14.327 1.74-27.769 4.785-39.378zM131.638 82H200v-8.948c0-38.345-29.975-69.69-67.771-71.878C135.265 12.77 137 26.194 137 40.5c0 15.209-1.96 29.42-5.362 41.5z"
							transform="translate(32 28)"
						></path>
						<path
							fill="#E6E6E6"
							d="M149 58l9.556-7.167a4 4 0 014.856.043L170 56l-21 2z"
							transform="translate(32 28)"
						></path>
						<path
							fill="#2F4351"
							d="M69 0c-4 19.333-2.333 46.667 5 82H58L44 46l6-9-6-6L63 1c2.028-.63 4.028-.964 6-1z"
							transform="translate(32 28)"
						></path>
						<path
							fill="#2F4351"
							d="M151 0c-4 19.333-2.333 46.667 5 82h-16l-14-36 6-9-6-6 19-30c2.028-.63 4.028-.964 6-1z"
							transform="translate(32 28) matrix(-1 0 0 1 282 0)"
						></path>
					</g>
					<g fill="#000" transform="translate(76 82)">
						{light ? (
							<g
								id="Mouth/Serious"
								transform="translate(2.000000, 52.000000)"
								fill="#000000"
								fillOpacity="0.699999988"
							>
								<rect id="Why-so-serious?" x="42" y="18" width="24" height="6" rx="3"></rect>
							</g>
						) : (
							<g transform="translate(2 52)">
								<defs>
									<path
										id="react-path-153"
										d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128z"
									></path>
								</defs>
								<mask id="react-mask-154" fill="#fff">
									<use xlinkHref="#react-path-153"></use>
								</mask>
								<use fillOpacity="0.7" xlinkHref="#react-path-153"></use>
								<rect
									width="31"
									height="16"
									x="39"
									y="2"
									fill="#FFF"
									mask="url(#react-mask-154)"
									rx="5"
								></rect>
								<g fill="#FF4F6D" mask="url(#react-mask-154)">
									<g transform="translate(38 24)">
										<circle cx="11" cy="11" r="11"></circle>
										<circle cx="21" cy="11" r="11"></circle>
									</g>
								</g>
							</g>
						)}
						<path
							fillOpacity="0.16"
							d="M16 8c0 4.418 5.373 8 12 8s12-3.582 12-8"
							transform="translate(28 40)"
						></path>
						{light ? (
							<g id="Eyes/Default-😀" transform="translate(0.000000, 8.000000)" fillOpacity="0.6">
								<circle id="Eye" cx="30" cy="22" r="6"></circle>
								<circle id="Eye" cx="82" cy="22" r="6"></circle>
							</g>
						) : (
							<g fillOpacity="0.6">
								<path
									d="M16.16 22.447C18.007 18.65 22.164 16 26.998 16c4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125zM74.16 22.447C76.007 18.65 80.164 16 84.998 16c4.816 0 8.961 2.63 10.817 6.407.552 1.122-.233 2.04-1.024 1.36-2.451-2.107-5.932-3.423-9.793-3.423-3.74 0-7.124 1.235-9.56 3.228-.891.728-1.818-.014-1.278-1.125z"
									transform="translate(0 8)"
								></path>
							</g>
						)}
						<g fillOpacity="0.6">
							<path
								d="M26.04 6.21c-5.762.773-14.747 5.795-13.996 11.608.025.19.313.25.437.09 2.486-3.188 21.712-7.871 28.713-6.893.641.09 1.064-.572.627-.985-3.744-3.535-10.62-4.518-15.782-3.82"
								transform="rotate(5 27 12)"
							></path>
							<path
								d="M85.04 6.21c-5.762.773-14.747 5.795-13.996 11.608.025.19.313.25.437.09 2.486-3.188 21.712-7.871 28.713-6.893.641.09 1.064-.572.627-.985-3.744-3.535-10.62-4.518-15.782-3.82"
								transform="scale(-1 1) rotate(5 0 -1957.724)"
							></path>
						</g>
						<g
							id="Top/_Resources/Sunglasses"
							fill="none"
							transform="translate(62.000000, 85.000000)"
							strokeWidth="1"
						>
							<defs>
								<path
									d="M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z"
									id="react-path-105"
								></path>
								<path
									d="M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z"
									id="react-path-106"
								></path>
								<linearGradient
									x1="50%"
									y1="0%"
									x2="50%"
									y2="70.5058195%"
									id="react-linear-gradient-108"
								>
									<stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%"></stop>
									<stop stopColor="#000000" stopOpacity="0.5" offset="100%"></stop>
								</linearGradient>
							</defs>

							<g
								id="Sunglasses"
								filter="url(#react-filter-107)"
								transform="translate(-70.000000, -74.000000)"
								style={{
									opacity: light ? 1 : 0,
									transition: "opacity 0.3s",
								}}
							>
								<g id="shades">
									<use fillOpacity="0.700000048" fill="#000000" xlinkHref="#react-path-105"></use>
									<use
										fill="url(#react-linear-gradient-108)"
										xlinkHref="#react-path-105"
										style={{ mixBlendMode: "screen" }}
									></use>
								</g>
								<g id="shades">
									<use fillOpacity="0.700000048" fill="#000000" xlinkHref="#react-path-106"></use>
									<use
										fill="url(#react-linear-gradient-108)"
										xlinkHref="#react-path-106"
										style={{ mixBlendMode: "screen" }}
									></use>
								</g>
								<g id="Glasses" fill="#252C2F">
									<path
										d="M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z"
										id="Frame"
									></path>
									<path
										d="M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z"
										id="Frame"
									></path>
									<path
										d="M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267"
										id="Frame"
									></path>
									<path
										d="M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267"
										id="Frame"
									></path>
									<path
										d="M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333"
										id="Frame"
									></path>
								</g>
							</g>
						</g>
					</g>
					<g fillRule="evenodd" strokeWidth="1">
						<defs>
							<path id="react-path-115" d="M0 0H264V280H0z"></path>
							<path
								id="react-path-114"
								d="M94.252 52.022c.123-.054-.182-.075-.916-.062.892-.002 1.197.019.916.062m-8.135-15.72c-.002-.02.017.15 0 0m107.648 34.464c-.264-3.317-.732-6.614-1.518-9.855-.625-2.576-1.478-5.033-2.487-7.491-.61-1.485-2.032-3.524-2.2-5.126-.165-1.577 1.067-3.325 1.33-5.162a15.981 15.981 0 00-.156-5.438c-.833-4.023-3.594-7.764-7.857-8.813-.952-.234-2.964.055-3.636-.5-.771-.635-1.308-2.8-2.006-3.669-1.99-2.476-5.095-4.07-8.37-3.514-2.41.409-1.026.907-2.833-.512-1.005-.788-1.756-1.993-2.732-2.847-1.467-1.283-3.15-2.38-4.892-3.282-4.557-2.358-9.754-4.072-14.844-4.908-9.285-1.524-19.195-.195-28.195 2.22-4.479 1.201-8.987 2.726-13.147 4.743-1.783.864-2.813 1.582-4.673 1.808-2.928.357-5.409.339-8.183 1.581-8.536 3.822-12.381 12.689-9.06 21.174a14.64 14.64 0 002.82 4.584c1.521 1.68 2.072 1.35.762 3.282a52.787 52.787 0 00-4.955 9.172c-3.529 8.402-4.12 17.864-3.89 26.824.081 3.137.216 6.313.71 9.42.214 1.344.274 3.872 1.282 4.87.512.506 1.241.788 1.969.587 1.71-.474 1.121-1.735 1.161-2.906.2-5.884-.07-11.089 1.33-16.902 1.033-4.294 2.755-8.195 4.988-12.035 2.838-4.884 5.903-9.173 9.807-13.355.917-.984 1.118-1.4 2.349-1.472.932-.054 2.295.584 3.2.805 1.999.487 4 .968 6.034 1.296 3.74.603 7.444.644 11.217.525 7.426-.232 14.885-.753 22.085-2.623 4.782-1.242 9.022-3.47 13.602-5.105.082-.029 1.23-.847 1.43-.814.282.047 1.978 1.826 2.264 2.05 2.226 1.746 4.667 2.479 7.07 3.83 2.964 1.667.094-.718 1.728 1.359.477.605.72 1.726 1.103 2.411a18.08 18.08 0 004.93 5.624c1.956 1.47 4.894 2.18 5.891 4.095.769 1.477 1.028 3.484 1.648 5.06 1.628 4.136 3.777 7.992 5.926 11.887 1.732 3.14 3.625 5.881 3.818 9.468.067 1.248-1.121 8.737 1.773 6.46.429-.338 1.353-4.156 1.543-4.804.772-2.633 1.046-5.381 1.395-8.086.694-5.38.923-10.498.47-15.916"
							></path>
						</defs>

						<g mask="url(#react-mask-113)">
							<g transform="translate(-1)">
								<mask id="react-mask-112" fill="#fff">
									<use xlinkHref="#react-path-114"></use>
								</mask>
								<use fill="#28354B" xlinkHref="#react-path-114"></use>
								<g fill="#4A312C" mask="url(#react-mask-112)">
									<path d="M0 0H264V280H0z"></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}