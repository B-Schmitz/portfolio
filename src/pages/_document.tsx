import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "theme/theme";
import {
	TITLE,
	DESCRIPTION,
	COVER_IMG,
	URL,
	AUTHOR,
	COPYRIGHT,
	KEYWORDS,
} from "utils";

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head>
				<title>Bernardo Schmitz</title>
				<meta name="author" content={AUTHOR} />
				<meta name="copyright" content={COPYRIGHT} />
				<meta name="keywords" content={KEYWORDS.join(",")} />
				<meta name="theme-color" content={theme.background} />
				<meta property="og:title" content={TITLE} />
				<meta name="description" content={DESCRIPTION} />
				<meta property="og:url" content={URL} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:image" content={COVER_IMG} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={URL} />
				<meta property="twitter:url" content={URL} />
				<meta name="twitter:title" content={TITLE} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta name="twitter:image" content={COVER_IMG} />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
