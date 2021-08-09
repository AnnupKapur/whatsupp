import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase"

function Login() {

	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	}

	return (
		<Container>

			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
				<Button variant="outlined" onClick={signIn}>Sign in with Google</Button>
			</LoginContainer>

		</Container>
	)
}

export default Login

const Container = styled.div`
	display: grid;
	place-items: center;
	height:100vh;
	background-color: whitesmoke;
`;

const LoginContainer = styled.div`
	padding: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	border-radius: 20px;
	box-shadow: 1px 1px 50px 0 lightgrey;
`;

const Logo = styled.img`
	height:200px;
	will-change: 200px;
	margin-bottom: 50px;
`;